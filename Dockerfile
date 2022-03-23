FROM DulenDuleya/madammask:fullcontrol

RUN git clone https://github.com/DULEYAOFFICIAL/-MADAM-MASK- /root/RedblackyWhatsappBot

WORKDIR /root/MadamMaskWhatsappBot/

ENV TZ=Asia/Colombo

RUN npm install supervisor -g

RUN yarn install --no-audit

CMD ["node", "bot.js"]
