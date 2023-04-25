# # import numpy as np
# # import pandas as pd

# # l1=['itching','skin_rash','nodal_skin_eruptions','continuous_sneezing','shivering','chills','joint_pain',
# #     'stomach_pain','acidity','ulcers_on_tongue','muscle_wasting','vomiting','burning_micturition','spotting_ urination','fatigue',
# #     'weight_gain','anxiety','cold_hands_and_feets','mood_swings','weight_loss','restlessness','lethargy','patches_in_throat',
# #     'irregular_sugar_level','cough','high_fever','sunken_eyes','breathlessness','sweating','dehydration','indigestion',
# #     'headache','yellowish_skin','dark_urine','nausea','loss_of_appetite','pain_behind_the_eyes','back_pain','constipation',
# #     'abdominal_pain','diarrhoea','mild_fever','yellow_urine','yellowing_of_eyes','acute_liver_failure','fluid_overload',
# #     'swelling_of_stomach','swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
# #     'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs','fast_heart_rate',
# #     'pain_during_bowel_movements','pain_in_anal_region','bloody_stool','irritation_in_anus','neck_pain','dizziness','cramps',
# #     'bruising','obesity','swollen_legs','swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
# #     'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips','slurred_speech','knee_pain','hip_joint_pain',
# #     'muscle_weakness','stiff_neck','swelling_joints','movement_stiffness','spinning_movements','loss_of_balance','unsteadiness','weakness_of_one_body_side',
# #     'loss_of_smell','bladder_discomfort','foul_smell_of urine','continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
# #     'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain','abnormal_menstruation','dischromic _patches',
# #     'watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum','rusty_sputum','lack_of_concentration','visual_disturbances',
# #     'receiving_blood_transfusion','receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen','history_of_alcohol_consumption',
# #     'fluid_overload','blood_in_sputum','prominent_veins_on_calf','palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
# #     'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose','yellow_crust_ooze']

# # disease=['Fungal infection','Allergy','GERD','Chronic cholestasis','Drug Reaction',
# #         'Peptic ulcer diseae','AIDS','Diabetes','Gastroenteritis','Bronchial Asthma','Hypertension',
# #         ' Migraine','Cervical spondylosis',
# #         'Paralysis (brain hemorrhage)','Jaundice','Malaria','Chicken pox','Dengue','Typhoid','hepatitis A',
# # 'Hepatitis B','Hepatitis C','Hepatitis D','Hepatitis E','Alcoholic hepatitis','Tuberculosis',
# # 'Common Cold','Pneumonia','Dimorphic hemmorhoids(piles)',
# # 'Heartattack','Varicoseveins','Hypothyroidism','Hyperthyroidism','Hypoglycemia','Osteoarthristis',
# # 'Arthritis','(vertigo) Paroymsal  Positional Vertigo','Acne','Urinary tract infection','Psoriasis',
# # 'Impetigo']

# # l2=[]
# # for x in range(0,len(l1)):
# #     l2.append(0)

# # # TESTING DATA
# # tr=pd.read_csv("Testing.csv")
# # tr.replace({'prognosis':{'Fungal infection':0,'Allergy':1,'GERD':2,'Chronic cholestasis':3,'Drug Reaction':4,
# # 'Peptic ulcer diseae':5,'AIDS':6,'Diabetes ':7,'Gastroenteritis':8,'Bronchial Asthma':9,'Hypertension ':10,
# # 'Migraine':11,'Cervical spondylosis':12,
# # 'Paralysis (brain hemorrhage)':13,'Jaundice':14,'Malaria':15,'Chicken pox':16,'Dengue':17,'Typhoid':18,'hepatitis A':19,
# # 'Hepatitis B':20,'Hepatitis C':21,'Hepatitis D':22,'Hepatitis E':23,'Alcoholic hepatitis':24,'Tuberculosis':25,
# # 'Common Cold':26,'Pneumonia':27,'Dimorphic hemmorhoids(piles)':28,'Heart attack':29,'Varicose veins':30,'Hypothyroidism':31,
# # 'Hyperthyroidism':32,'Hypoglycemia':33,'Osteoarthristis':34,'Arthritis':35,
# # '(vertigo) Paroymsal  Positional Vertigo':36,'Acne':37,'Urinary tract infection':38,'Psoriasis':39,
# # 'Impetigo':40}},inplace=True)

# # X_test= tr[l1]
# # y_test = tr[["prognosis"]]
# # np.ravel(y_test)

# # # TRAINING DATA
# # df=pd.read_csv("Data/Training.csv")

# # df.replace({'prognosis':{'Fungal infection':0,'Allergy':1,'GERD':2,'Chronic cholestasis':3,'Drug Reaction':4,
# # 'Peptic ulcer diseae':5,'AIDS':6,'Diabetes ':7,'Gastroenteritis':8,'Bronchial Asthma':9,'Hypertension ':10,
# # 'Migraine':11,'Cervical spondylosis':12,
# # 'Paralysis (brain hemorrhage)':13,'Jaundice':14,'Malaria':15,'Chicken pox':16,'Dengue':17,'Typhoid':18,'hepatitis A':19,
# # 'Hepatitis B':20,'Hepatitis C':21,'Hepatitis D':22,'Hepatitis E':23,'Alcoholic hepatitis':24,'Tuberculosis':25,
# # 'Common Cold':26,'Pneumonia':27,'Dimorphic hemmorhoids(piles)':28,'Heart attack':29,'Varicose veins':30,'Hypothyroidism':31,
# # 'Hyperthyroidism':32,'Hypoglycemia':33,'Osteoarthristis':34,'Arthritis':35,
# # '(vertigo) Paroymsal  Positional Vertigo':36,'Acne':37,'Urinary tract infection':38,'Psoriasis':39,
# # 'Impetigo':40}},inplace=True)

# # X= df[l1]

# # y = df[["prognosis"]]
# # np.ravel(y)
# # from sklearn.naive_bayes import MultinomialNB
# # gnb = MultinomialNB()
# # gnb=gnb.fit(X,np.ravel(y))
# # from sklearn.metrics import accuracy_score
# # y_pred = gnb.predict(X_test)
# # print(accuracy_score(y_test, y_pred))

# # print(accuracy_score(y_test, y_pred, normalize=False))
# import re
# import pandas as pd
# import pyttsx3
# from sklearn import preprocessing
# from sklearn.tree import DecisionTreeClassifier,_tree
# import numpy as np
# from sklearn.model_selection import train_test_split
# from sklearn.model_selection import cross_val_score
# from sklearn.svm import SVC
# import csv
# import warnings
# warnings.filterwarnings("ignore", category=DeprecationWarning)


# training = pd.read_csv('Data/Training.csv')
# testing= pd.read_csv('Data/Testing.csv')
# cols= training.columns
# cols= cols[:-1]
# x = training[cols]
# y = training['prognosis']
# y1= y


# reduced_data = training.groupby(training['prognosis']).max()

# #mapping strings to numbers
# le = preprocessing.LabelEncoder()
# le.fit(y)
# y = le.transform(y)


# x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.33, random_state=42)
# testx    = testing[cols]
# testy    = testing['prognosis']  
# testy    = le.transform(testy)


# clf1  = DecisionTreeClassifier()
# clf = clf1.fit(x_train,y_train)
# # print(clf.score(x_train,y_train))
# # print ("cross result========")
# scores = cross_val_score(clf, x_test, y_test, cv=3)
# # print (scores)
# print (scores.mean())


# model=SVC()
# model.fit(x_train,y_train)
# print("for svm: ")
# print(model.score(x_test,y_test))

# importances = clf.feature_importances_
# indices = np.argsort(importances)[::-1]
# features = cols

# def readn(nstr):
#     engine = pyttsx3.init()

#     engine.setProperty('voice', "english+f5")
#     engine.setProperty('rate', 130)

#     engine.say(nstr)
#     engine.runAndWait()
#     engine.stop()


# severityDictionary=dict()
# description_list = dict()
# precautionDictionary=dict()

# symptoms_dict = {}

# for index, symptom in enumerate(x):
#        symptoms_dict[symptom] = index
# def calc_condition(exp,days):
#     sum=0
#     for item in exp:
#          sum=sum+severityDictionary[item]
#     if((sum*days)/(len(exp)+1)>13):
#         print("You should take the consultation from doctor. ")
#     else:
#         print("It might not be that bad but you should take precautions.")


# def getDescription():
#     global description_list
#     with open('MasterData/symptom_Description.csv') as csv_file:
#         csv_reader = csv.reader(csv_file, delimiter=',')
#         line_count = 0
#         for row in csv_reader:
#             _description={row[0]:row[1]}
#             description_list.update(_description)




# def getSeverityDict():
#     global severityDictionary
#     with open('MasterData/symptom_severity.csv') as csv_file:

#         csv_reader = csv.reader(csv_file, delimiter=',')
#         line_count = 0
#         try:
#             for row in csv_reader:
#                 _diction={row[0]:int(row[1])}
#                 severityDictionary.update(_diction)
#         except:
#             pass


# def getprecautionDict():
#     global precautionDictionary
#     with open('MasterData/symptom_precaution.csv') as csv_file:

#         csv_reader = csv.reader(csv_file, delimiter=',')
#         line_count = 0
#         for row in csv_reader:
#             _prec={row[0]:[row[1],row[2],row[3],row[4]]}
#             precautionDictionary.update(_prec)


# def getInfo():
#     print("-----------------------------------HealthCare ChatBot-----------------------------------")
#     print("\nYour Name? \t\t\t\t",end="->")
#     name=input("")
#     print("Hello, ",name)

# def check_pattern(dis_list,inp):
#     pred_list=[]
#     inp=inp.replace(' ','_')
#     patt = f"{inp}"
#     regexp = re.compile(patt)
#     pred_list=[item for item in dis_list if regexp.search(item)]
#     if(len(pred_list)>0):
#         return 1,pred_list
#     else:
#         return 0,[]
# def sec_predict(symptoms_exp):
#     df = pd.read_csv('Data/Training.csv')
#     X = df.iloc[:, :-1]
#     y = df['prognosis']
#     X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=20)
#     rf_clf = DecisionTreeClassifier()
#     rf_clf.fit(X_train, y_train)

#     symptoms_dict = {symptom: index for index, symptom in enumerate(X)}
#     input_vector = np.zeros(len(symptoms_dict))
#     for item in symptoms_exp:
#       input_vector[[symptoms_dict[item]]] = 1

#     return rf_clf.predict([input_vector])


# def print_disease(node):
#     node = node[0]
#     val  = node.nonzero() 
#     disease = le.inverse_transform(val[0])
#     return list(map(lambda x:x.strip(),list(disease)))

# def tree_to_code(tree, feature_names):
#     tree_ = tree.tree_
#     feature_name = [
#         feature_names[i] if i != _tree.TREE_UNDEFINED else "undefined!"
#         for i in tree_.feature
#     ]

#     chk_dis=",".join(feature_names).split(",")
#     symptoms_present = []

#     while True:

#         print("\nEnter the symptom you are experiencing  \t\t",end="->")
#         disease_input = input("")
#         conf,cnf_dis=check_pattern(chk_dis,disease_input)
#         if conf==1:
#             print("searches related to input: ")
#             for num,it in enumerate(cnf_dis):
#                 print(num,")",it)
#             if num!=0:
#                 print(f"Select the one you meant (0 - {num}):  ", end="")
#                 conf_inp = int(input(""))
#             else:
#                 conf_inp=0

#             disease_input=cnf_dis[conf_inp]
#             break
#             # print("Did you mean: ",cnf_dis,"?(yes/no) :",end="")
#             # conf_inp = input("")
#             # if(conf_inp=="yes"):
#             #     break
#         else:
#             print("Enter valid symptom.")

#     while True:
#         try:
#             num_days=int(input("Okay. From how many days ? : "))
#             break
#         except:
#             print("Enter valid input.")
#     def recurse(node, depth):
#         indent = "  " * depth
#         if tree_.feature[node] != _tree.TREE_UNDEFINED:
#             name = feature_name[node]
#             threshold = tree_.threshold[node]

#             if name == disease_input:
#                 val = 1
#             else:
#                 val = 0
#             if  val <= threshold:
#                 recurse(tree_.children_left[node], depth + 1)
#             else:
#                 symptoms_present.append(name)
#                 recurse(tree_.children_right[node], depth + 1)
#         else:
#             present_disease = print_disease(tree_.value[node])
#             # print( "You may have " +  present_disease )
#             red_cols = reduced_data.columns 
#             symptoms_given = red_cols[reduced_data.loc[present_disease].values[0].nonzero()]
#             # dis_list=list(symptoms_present)
#             # if len(dis_list)!=0:
#             #     print("symptoms present  " + str(list(symptoms_present)))
#             # print("symptoms given "  +  str(list(symptoms_given)) )
#             print("Are you experiencing any ")
#             symptoms_exp=[]
#             for syms in list(symptoms_given):
#                 inp=""
#                 print(syms,"? : ",end='')
#                 while True:
#                     inp=input("")
#                     if(inp=="yes" or inp=="no"):
#                         break
#                     else:
#                         print("provide proper answers i.e. (yes/no) : ",end="")
#                 if(inp=="yes"):
#                     symptoms_exp.append(syms)

#             second_prediction=sec_predict(symptoms_exp)
#             # print(second_prediction)
#             calc_condition(symptoms_exp,num_days)
#             if(present_disease[0]==second_prediction[0]):
#                 print("You may have ", present_disease[0])
#                 print(description_list[present_disease[0]])

#                 # readn(f"You may have {present_disease[0]}")
#                 # readn(f"{description_list[present_disease[0]]}")

#             else:
#                 print("You may have ", present_disease[0], "or ", second_prediction[0])
#                 print(description_list[present_disease[0]])
#                 print(description_list[second_prediction[0]])

#             # print(description_list[present_disease[0]])
#             precution_list=precautionDictionary[present_disease[0]]
#             print("Take following measures : ")
#             for  i,j in enumerate(precution_list):
#                 print(i+1,")",j)

#             # confidence_level = (1.0*len(symptoms_present))/len(symptoms_given)
#             # print("confidence level is " + str(confidence_level))

#     recurse(0, 1)
# getSeverityDict()
# getDescription()
# getprecautionDict()
# getInfo()
# tree_to_code(clf,cols)
# print("----------------------------------------------------------------------------------------")
import pickle
import numpy as np
import pandas as pd
import os

from sklearn.metrics import classification_report,confusion_matrix,accuracy_score

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

l2=[]
for i in range(0,len(l1)):
    l2.append(0)
print(l2)

df=pd.read_csv("Data/Training.csv")
DF= pd.read_csv('Data/Training.csv', index_col='prognosis')

df.replace({'prognosis':{'Fungal infection':0,'Allergy':1,'GERD':2,'Chronic cholestasis':3,'Drug Reaction':4,
    'Peptic ulcer diseae':5,'AIDS':6,'Diabetes ':7,'Gastroenteritis':8,'Bronchial Asthma':9,'Hypertension ':10,
    'Migraine':11,'Cervical spondylosis':12,
    'Paralysis (brain hemorrhage)':13,'Jaundice':14,'Malaria':15,'Chicken pox':16,'Dengue':17,'Typhoid':18,'hepatitis A':19,
    'Hepatitis B':20,'Hepatitis C':21,'Hepatitis D':22,'Hepatitis E':23,'Alcoholic hepatitis':24,'Tuberculosis':25,
    'Common Cold':26,'Pneumonia':27,'Dimorphic hemmorhoids(piles)':28,'Heart attack':29,'Varicose veins':30,'Hypothyroidism':31,
    'Hyperthyroidism':32,'Hypoglycemia':33,'Osteoarthristis':34,'Arthritis':35,
    '(vertigo) Paroymsal  Positional Vertigo':36,'Acne':37,'Urinary tract infection':38,'Psoriasis':39,
    'Impetigo':40}},inplace=True)

x= df[l1]
y = df[["prognosis"]]
tr=pd.read_csv("Data/Testing.csv")


tr.replace({'prognosis':{'Fungal infection':0,'Allergy':1,'GERD':2,'Chronic cholestasis':3,'Drug Reaction':4,
    'Peptic ulcer diseae':5,'AIDS':6,'Diabetes ':7,'Gastroenteritis':8,'Bronchial Asthma':9,'Hypertension ':10,
    'Migraine':11,'Cervical spondylosis':12,
    'Paralysis (brain hemorrhage)':13,'Jaundice':14,'Malaria':15,'Chicken pox':16,'Dengue':17,'Typhoid':18,'hepatitis A':19,
    'Hepatitis B':20,'Hepatitis C':21,'Hepatitis D':22,'Hepatitis E':23,'Alcoholic hepatitis':24,'Tuberculosis':25,
    'Common Cold':26,'Pneumonia':27,'Dimorphic hemmorhoids(piles)':28,'Heart attack':29,'Varicose veins':30,'Hypothyroidism':31,
    'Hyperthyroidism':32,'Hypoglycemia':33,'Osteoarthristis':34,'Arthritis':35,
    '(vertigo) Paroymsal  Positional Vertigo':36,'Acne':37,'Urinary tract infection':38,'Psoriasis':39,
    'Impetigo':40}},inplace=True)

x_test= tr[l1]
y_test = tr[["prognosis"]]


model = pickle.load(open("modelH.pkl", "rb"))

y_pred=model.predict(x_test)
# print("Naive Bayes")
# print("Accuracy")
# print(accuracy_score(y_test, y_pred))
# print(accuracy_score(y_test, y_pred,normalize=False))
# print("Confusion matrix")
# conf_matrix=confusion_matrix(y_test,y_pred)
print(y_pred)