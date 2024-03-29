/* Codded by @Dulen Sathsara

Telegram: t.me/dulensathsara

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Dulen Sathsara
*/

let DataPack = require('madam-mask');
let MadamMask = require('madam-mask/sources/dc/handler');
let Details = require('madam-mask/sources/dc/Details');
const { DataTypes } = require('sequelize');

const PluginDB = Details.DATABASE.define('Plugin', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

async function installPlugin(adres, file) {
    var Plugin = await PluginDB.findAll({
        where: {url: adres}
    });

    if (Plugin.length >= 1) {
        return false;
    } else {
        return await PluginDB.create({ url: adres, name: file });
    }
}
module.exports = { PluginDB: PluginDB, installPlugin: installPlugin };
