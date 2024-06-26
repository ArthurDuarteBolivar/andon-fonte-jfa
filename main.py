# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# import time
# import pyautogui
# pyautogui.FAILSAFE = False
# from PIL import ImageGrab
# from datetime import datetime
# import shutil
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.base import MIMEBase
# from email import encoders
# import os
# import yagmail  # Importando yagmail
# import requests
# import schedule

# def capture_and_move_screenshot():
#     service = Service(executable_path=r"C:\chromedriver\chromedriver-win64\chromedriver.exe")
#     driver = webdriver.Chrome(service=service)
#     driver.maximize_window()
#     pyautogui.press('f11')

#     driver.get("http://172.16.34.147:4300/")

#     time.sleep(6)

#     screenshot = ImageGrab.grab()

#     data_atual = datetime.now()

#     nome_arquivo = data_atual.strftime("%Y-%m-%d_%H-%M-%S") + ".png"

#     screenshot.save(nome_arquivo)

#     time.sleep(2)

#     diretorio_origem = "./" + nome_arquivo
#     diretorio_destino = r"C:\screenshot-andon"

#     shutil.move(diretorio_origem, diretorio_destino)

#     # Enviar e-mail com o screenshot como anexo
#     send_email_with_attachment(nome_arquivo)

#     driver.quit()

#     time.sleep(3)

# def send_email_with_attachment(file_name):
#     requests.get(f"http://172.16.34.147:9002/?nome={file_name}")

# # Agendar a execução do código todos os dias às 19 horas
# schedule.every().day.at("13:19:00").do(capture_and_move_screenshot)

# while True:
#     schedule.run_pending()
#     time.sleep(1)

# capture_and_move_screenshot()



from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time
import pyautogui
from datetime import datetime
import shutil
import os
import requests
import schedule
import mss  # Importando mss para captura de tela

time.sleep(5)
# Configurando pyautogui
pyautogui.FAILSAFE = False

def capture_and_move_screenshot():
    # Inicializando o Selenium WebDriver
    service = Service(executable_path=r"C:\chromedriver\chromedriver-win64\chromedriver.exe")
    driver = webdriver.Chrome(service=service)
    driver.maximize_window()
    pyautogui.press('f11')
    driver.execute_script("document.body.style.zoom='70%'")
    # Acessando a URL
    driver.get("http://172.16.34.147:4300/")
    time.sleep(6)


    data_atual = datetime.now()
    nome_arquivo = data_atual.strftime("%Y-%m-%d_%H-%M-%S") + ".png"

    driver.save_screenshot(nome_arquivo) 
    diretorio_destino = r"C:\screenshot-andon"
    diretorio_origem = 'temp_screenshot.png'
    destino_completo = os.path.join(diretorio_destino, nome_arquivo)

    shutil.move(nome_arquivo, destino_completo)

    # Enviar e-mail com o screenshot como anexo
    send_email_with_attachment(nome_arquivo)

    # Finalizando o driver
    driver.quit()
    time.sleep(3)

def send_email_with_attachment(file_name):
    requests.get(f"http://172.16.34.147:9002/?nome={file_name}")

# Agendar para executar a função uma vez no horário desejado
schedule.every().monday.at("17:00:30").do(capture_and_move_screenshot)
schedule.every().tuesday.at("17:00:30").do(capture_and_move_screenshot)
schedule.every().wednesday.at("16:30:30").do(capture_and_move_screenshot)
schedule.every().thursday.at("17:00:30").do(capture_and_move_screenshot)
schedule.every().friday.at("16:00:30").do(capture_and_move_screenshot)

# Mantenha o loop para manter o script em execução
while True:
    schedule.run_pending()
    time.sleep(10)
