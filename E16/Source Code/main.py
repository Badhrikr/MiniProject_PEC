from camera import startapplication
import streamlit as st 
import os
from mail import send_sms

st.title('Collision Detection')

up_vdo = st.file_uploader('Upload Video', type=['mp4'])

if up_vdo is not None:
    with open(os.path.join(os.getcwd(), up_vdo.name), 'wb') as f:
        f.write(up_vdo.getvalue())
            
if st.button('Detect'):
    if up_vdo is not None:
        probs = startapplication(up_vdo.name)
        if (probs > 69).any():
            st.write('Accident Detected!!!!!')
            st.write('Level of the Accident is Severe')
            st.write('Major Accident: Probability: {}'.format(probs))
            try:
                msg = 'Major accident detected needed immediate action needed with medical support '
                send_sms(msg)
            except:
                print("SMS NOT SENT")
        elif (probs > 40).any():
            st.write('Accident Detected!!!!!')
            st.write('Level of the Accident is Moderate')
            try:
                msg = 'moderate  accident detected needed immediate action'
                send_sms(msg)
            except:
                print("SMS NOT SENT")
        else:
            st.write('Accident Detected!!!!!')
            st.write('Level of the Accident is Severe')
            try:
                msg = 'minor accident is detected '
                send_sms(msg)
            except:
                print("SMS NOT SENT")
    else:
        st.write('Please upload a video file.')