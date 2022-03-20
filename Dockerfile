FROM DULEYAOFFICIAL/madammask:lovegift

RUN git clone https://github.com/DULEYAOFFICIAL/MadamMaskWhatsappBot /root/MadamMaskWhatsappBot
WORKDIR /root/MadamMaskWhatsappBot/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
