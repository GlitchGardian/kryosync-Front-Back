const contactForm = require("../model/kryosync")
function homepage() {
    return async (req, res) => {
        res.render("index")
    }
}


function careerHandler() {
    return async (req, res) => {
        const { f_name,
            l_name,
            email,
            mobileNumber,
            domain,
            About_person } = req.body;
        console.log(f_name, l_name, email, mobileNumber, domain, About_person);

        const contact = await contactForm.create({
            f_name, l_name, email, mobileNumber, domain, About_person
        })

        res.json({ contact })
    }
}


module.exports = {
    homepage,
    careerHandler,
}