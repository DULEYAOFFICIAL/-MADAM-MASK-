/* Copyright (C) 2022 MadamMask

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

MadamMask- dulen

*/

const chalk = require('chalk');

const {WAConnection} = require('@adiwajshing/baileys');

const {StringSession} = require('./MadamMask/');

const fs = require('fs');

async function madammask () {

    const conn = new WAConnection();

    const Session = new StringSession();  

    conn.version = [2, 2126, 14]

    conn.logger.level = 'warn';

    conn.regenerateQRIntervalMs = 50000;

    

    conn.on('🔄 connecting', async () => {

        console.log(`${chalk.green.bold('Red')}${chalk.blue.bold(' Blacky')}

${chalk.white.italic('Red Blacky Sting session')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);

    });

    

	conn.on('open', async () => {		console.log(

			chalk.green.bold('MadamMaskQR Code: '),

			'Mask;;;' +

				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(

					'base64'

				)

		);

		await conn.sendMessage(

			conn.user.jid,

			'MADAM;;;' +

				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(

					'base64'

				),

			MessageType.text

		);

		if (conn.user.jid.startsWith('94')) {

			await conn.sendMessage(

				conn.user.jid,

				'*⚠️ Meka denna epa katawath ' + conn.user.name + '* ⚠️',

				MessageType.text

			);

		} else {

			await conn.sendMessage(

				conn.user.jid,

				'*⚠️ Please Do Not Share This Code With Anyone ' +

					conn.user.name +

					'* ⚠️',

				MessageType.text

			);

		}

		console.log(

			chalk.green.bold(

				"Meka copy karanna bari nm whatsapp eke athi bn code eka awith!\n"

			),

			chalk.green.bold(

				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'

			)

		);

		process.exit(0);

	});

	await conn.connect();

}

madamMask()
