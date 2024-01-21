function formElement() {
    document.getElementById('fortuneForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const jobValue = document.getElementById('job').value;
        const locationValue = document.getElementById('location').value;
        const partnerValue = document.getElementById('partner').value;
        const childrenValue = document.getElementById('children').value;

        fortune(jobValue, locationValue, partnerValue, childrenValue);
    });
}


};

formElement();

})()

// I need some time to finish it, sorry. I will upload ASAP