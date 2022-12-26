/**
 * FrontEndChallController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    qr_code: async function (req, res) {
        return res.view('pages/qr_code', {title : 'QR Code'});
    },

};

