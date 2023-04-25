from flask import Flask, render_template, request, redirect, url_for,jsonify,session
from datetime import datetime
import pandas as pd
import pickle
import csv
import Login
app = Flask(__name__)
model = pickle.load(open("modelH.pkl", "rb"))
l1=['itching','skin_rash','nodal_skin_eruptions','continuous_sneezing','shivering','chills','joint_pain',
    'stomach_pain','acidity','ulcers_on_tongue','muscle_wasting','vomiting','burning_micturition','spotting_ urination','fatigue',
    'weight_gain','anxiety','cold_hands_and_feets','mood_swings','weight_loss','restlessness','lethargy','patches_in_throat',
    'irregular_sugar_level','cough','high_fever','sunken_eyes','breathlessness','sweating','dehydration','indigestion',
    'headache','yellowish_skin','dark_urine','nausea','loss_of_appetite','pain_behind_the_eyes','back_pain','constipation',
    'abdominal_pain','diarrhoea','mild_fever','yellow_urine','yellowing_of_eyes','acute_liver_failure','fluid_overload',
    'swelling_of_stomach','swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
    'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs','fast_heart_rate',
    'pain_during_bowel_movements','pain_in_anal_region','bloody_stool','irritation_in_anus','neck_pain','dizziness','cramps',
    'bruising','obesity','swollen_legs','swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
    'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips','slurred_speech','knee_pain','hip_joint_pain',
    'muscle_weakness','stiff_neck','swelling_joints','movement_stiffness','spinning_movements','loss_of_balance','unsteadiness','weakness_of_one_body_side',
    'loss_of_smell','bladder_discomfort','foul_smell_of urine','continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
    'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain','abnormal_menstruation','dischromic _patches',
    'watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum','rusty_sputum','lack_of_concentration','visual_disturbances',
    'receiving_blood_transfusion','receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen','history_of_alcohol_consumption',
    'fluid_overload','blood_in_sputum','prominent_veins_on_calf','palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
    'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose','yellow_crust_ooze']

disease=['Fungal infection','Allergy','GERD','Chronic cholestasis','Drug Reaction',
        'Peptic ulcer diseae','AIDS','Diabetes','Gastroenteritis','Bronchial Asthma','Hypertension',
        'Migraine','Cervical spondylosis',
        'Paralysis (brain hemorrhage)','Jaundice','Malaria','Chicken pox','Dengue','Typhoid','Hepatitis A',
'Hepatitis B','Hepatitis C','Hepatitis D','Hepatitis E','Alcoholic hepatitis','Tuberculosis',
'Common Cold','Pneumonia','Dimorphic hemmorhoids(piles)',
'Heartattack','Varicoseveins','Hypothyroidism','Hyperthyroidism','Hypoglycemia','Osteoarthristis',
'Arthritis','(vertigo) Paroymsal  Positional Vertigo','Acne','Urinary tract infection','Psoriasis',
'Impetigo']

idol_symptoms = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
description_list={}
precution_list={}
treatment_list={}
bookmarks =[]
special_doctor = {}
other_symp={}
def other_symptom():
    with open('Data/Training.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        row1 = next(csv_reader)
        for row in csv_reader:
            temp =[]
            for i in range(len(row)-1):
                if row[i]=='1':
                    temp.append(row1[i])
            _special_doctor={row[-1]:temp}
            other_symp.update(_special_doctor)

other_symptom()

def store_bookmarks(url):
    bookmarks.append(dict(
        url=url,
        user="rgen",
        date=datetime.utcnow()
    ))
def find_special_doctor():
    with open('MasterData/special_doctor.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            _special_doctor={row[0]:row[1]}
            special_doctor.update(_special_doctor)
def desc():
    with open('MasterData/symptom_Description.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            _description={row[0]:row[1]}
            description_list.update(_description)
def prec():
    with open('MasterData/symptom_precaution.csv') as csv_file:

        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            _prec={row[0]:[row[1],row[2],row[3],row[4]]}
            precution_list.update(_prec)
def treat():
    with open('MasterData/treatment.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            _treat={row[0]:[row[1],row[2],row[3]]}
            treatment_list.update(_treat)
desc()
prec()
treat()
find_special_doctor()

USER ={}
@app.route('/login', methods=['get', 'POST'])
def login():
    print(" ------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------------------------------------------------------")
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        print(" ------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        user = Login.login({"username": username, "password": password})
        
        if user != None:
            session['logedin'] = True
            session['username'] = username
            
            return redirect(url_for('.home',username=username))
        else:
            return render_template("login.html", error="Invalid username or password")
    return render_template("login.html")

@app.route('/find-doctor',methods=['get'])
def find_doctor():
    return render_template("find_doctor.html", search="doctor in kolhapur")

@app.route('/signup', methods=['POST','get'])
def signup():
    if request.method == "POST":
        form_data = request.form.to_dict() # parse form data as dictionary
        data= jsonify(form_data) # return form data as JSON response
        if Login.signup(form_data):
            return redirect(url_for('.home',data = form_data))
        else:
            return redirect(url_for('.signup', error="error"))
    return render_template("signup.html")

@app.route("/home", methods=["GET", "POST"])
def home():
    return render_template("index.html")

@app.route("/exercises", methods=["GET", "POST"])
def exercises():
    return render_template("exercise.html")
@app.route("/predict", methods=["POST"])
def predict():
    if request.method == "POST":
        user_symptoms=[]
        user_symptoms.append(request.form.get("symptom1").lower())
        user_symptoms.append(request.form.get("symptom2").lower())
        user_symptoms.append(request.form.get("symptom3").lower())
        user_symptoms.append(request.form.get("symptom4").lower())
        user_symptoms.append(request.form.get("symptom5").lower())
        user_symptoms.append(request.form.get("symptom6").lower())
        symptom_list =[]
        for i in user_symptoms:
            symptom_list.append(i.strip())
        print(symptom_list)
        predict_list = idol_symptoms
        for i in range(0, len(idol_symptoms)):
            for k in symptom_list:
                if(k == l1[i]):
                    predict_list[i]=1
        f=pd.DataFrame([predict_list], columns=l1)
        print(f)
        disease_name =disease[model.predict(f)[0]]
        description = description_list[disease_name]
        precution = precution_list[disease_name]
        treatment = treatment_list[disease_name]
        ayur = treatment[0]
        homeopathic = treatment[1]
        conventional = treatment[2]
        doctor = special_doctor[disease_name]
        other_sympotom_list = other_symp[disease_name]
        ct=0
        for i in other_sympotom_list:
            for j in symptom_list:
                if i==j:
                    ct+=1
        szor=len(other_sympotom_list)
        szur=len(symptom_list)
        percentage = (ct*100)/szor
        # print(other_symp,"sadfjkl")

        
    return render_template("index.html",percentage=percentage,other_symptoms = other_sympotom_list, special_doctor = doctor, disease=disease_name , description=description, precution = precution, ayur=ayur, homeopathic=homeopathic, conventional= conventional)
@app.route('/pie' , methods=['GET', 'POST'])
def pie():
    return render_template("pichart.html" , work=2)
@app.route('/chat')
def chat():
    return render_template("chat.html")

if __name__ == "__main__":
    app.secret_key = 'phionxhealthcareapp'
    app.config['SESSION_TYPE'] = 'filesystem'
    app.debug = True
    app.run()
