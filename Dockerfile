FROM NishNishendanidu/redblacky:fullcontrol

RUN git clone https://github.com/NishNishendaniduRedBlacky /root/RedblackyWhatsappBot

WORKDIR /root/RedBlackyWhatsappBot/

ENV TZ=Asia/Colombo

RUN npm install supervisor -g

RUN yarn install --no-audit

CMD ["node", "bot.js"]
