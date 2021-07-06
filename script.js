// Hamburger menu - Mobile mode appearing
const mobileMenuBtn = document.querySelector('.mobile-menu-open');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuBtn.addEventListener('click', e => {
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
})

/* Bookmark section */
const bookmarkBtn = document.querySelector('.bookmark');

/* Toggle bookmark button*/
bookmarkBtn.addEventListener('click', e => {
    if (bookmarkBtn.classList.contains('active')) {
        bookmarkBtn.classList.remove('active');
        bookmarkBtn.querySelector('p').innerHTML = 'Bookmark';
    }
    else {
        bookmarkBtn.classList.add('active');
        bookmarkBtn.querySelector('p').innerHTML = 'Bookmarked';
    }
})

/* Project payment progress bar */
const progressBar = document.querySelector('.loading');
const currentAmount = document.getElementById('current-amount');
let currentAmountInt = parseInt(currentAmount.innerHTML, 10);
console.log((currentAmountInt/1000));
function updateProgressBar() {
    if ( (currentAmountInt / 1000) <= 100) {
        progressBar.style.width = ( currentAmountInt / 1000 ) + "%";       
    }
    else {
        progressBar.style.width = "100%";
    }
    currentAmount.innerHTML = "$" + currentAmountInt;
}
//Call it when the page loads
updateProgressBar();

/* Total backers number */
const totalBackers = document.getElementById('total-backers');




/* Modal pledge menu */
const closeBtn = document.getElementById('close-modal');
const radioBtns = document.querySelectorAll('.radio-btn');

// Opening the modal menu on green buttons clicks
const greenBtn = document.querySelectorAll('.modal-launcher');
greenBtn.forEach(e => {
    e.addEventListener('click', j => {
        document.querySelector('.selection-modal-wrapper').classList.add('openMenu');
        window.scroll(0,0);
    })
})

closeBtn.addEventListener('click', e => {
    document.querySelector('.selection-modal-wrapper').classList.remove('openMenu');
})

// Shows pledge amount on radio btn click
// Wow this must be the worst way to do it
radioBtns.forEach(e => {
    e.addEventListener('click', j => {
        switch (true) {
            case e.classList.contains('00'):
                document.querySelector('.selected-pledge.v00').classList.add('active');
                document.querySelector('.selected-pledge.v25').classList.remove('active');
                document.querySelector('.selected-pledge.v75').classList.remove('active');
                document.querySelector('.selected-pledge.v200').classList.remove('active');
                document.querySelector('.pledge-wrapper.v00').classList.add('active');
                document.querySelector('.pledge-wrapper.v25').classList.remove('active');
                document.querySelector('.pledge-wrapper.v75').classList.remove('active');
                document.querySelector('.pledge-wrapper.v200').classList.remove('active');
                break;
            case e.classList.contains('25'):
                document.querySelector('.selected-pledge.v25').classList.add('active');
                document.querySelector('.selected-pledge.v00').classList.remove('active');
                document.querySelector('.selected-pledge.v75').classList.remove('active');
                document.querySelector('.selected-pledge.v200').classList.remove('active');
                document.querySelector('.pledge-wrapper.v25').classList.add('active');
                document.querySelector('.pledge-wrapper.v00').classList.remove('active');
                document.querySelector('.pledge-wrapper.v75').classList.remove('active');
                document.querySelector('.pledge-wrapper.v200').classList.remove('active');
                break;
            case e.classList.contains('75'):
                document.querySelector('.selected-pledge.v75').classList.add('active');
                document.querySelector('.selected-pledge.v25').classList.remove('active');
                document.querySelector('.selected-pledge.v00').classList.remove('active');
                document.querySelector('.selected-pledge.v200').classList.remove('active');
                document.querySelector('.pledge-wrapper.v75').classList.add('active');
                document.querySelector('.pledge-wrapper.v25').classList.remove('active');
                document.querySelector('.pledge-wrapper.v00').classList.remove('active');
                document.querySelector('.pledge-wrapper.v200').classList.remove('active');
                break;
            case e.classList.contains('200'):
                document.querySelector('.selected-pledge.v200').classList.add('active');
                document.querySelector('.selected-pledge.v25').classList.remove('active');
                document.querySelector('.selected-pledge.v75').classList.remove('active');
                document.querySelector('.selected-pledge.v00').classList.remove('active');
                document.querySelector('.pledge-wrapper.v200').classList.add('active');
                document.querySelector('.pledge-wrapper.v25').classList.remove('active');
                document.querySelector('.pledge-wrapper.v75').classList.remove('active');
                document.querySelector('.pledge-wrapper.v00').classList.remove('active');
                break;
        }
    })
    
})

//Uncheck radio button when pledge done
function uncheckRadioBtn() {
    radioBtns.forEach(e => {
        e.checked = false;
    })
    document.querySelector('.selected-pledge.v00').classList.remove('active');
    document.querySelector('.selected-pledge.v25').classList.remove('active');
    document.querySelector('.selected-pledge.v75').classList.remove('active');
    document.querySelector('.selected-pledge.v200').classList.remove('active');
}

// Displaying the success modal menu
const openSuccess = document.querySelectorAll('.open-success-modal');
openSuccess.forEach(e => {
    e.addEventListener('click', j => {
        // document.querySelector('.success-modal-wrapper').classList.remove('closeMenu');
        // document.querySelector('.success-modal-wrapper').classList.add('openMenu');
        // document.querySelector('.selection-modal-wrapper').classList.remove('openMenu');
    })
})


// Closing the success modal menu
const closeSuccess = document.querySelector('.close-success');

closeSuccess.addEventListener('click', e => {
    document.querySelector('.success-modal-wrapper').classList.add('closeMenu');
    setTimeout( e => {
        document.querySelector('.success-modal-wrapper').classList.remove('openMenu');
    }, 700)
})


// Adding amount function
function addAmount(amount) {
    currentAmountInt = amount + currentAmountInt;
    progressBar.style.width = ( currentAmountInt / 1000 ) + "%";
    currentAmount.innerHTML = "$" + currentAmountInt;
    totalBackers.innerHTML = parseInt(totalBackers.innerHTML, 10) +1;
    updateProgressBar();
}


// Adding pledge without rewards to global amount
const value0 = document.getElementById('0-amount');
const btn0 = document.querySelector('.green-btn.v00');
btn0.addEventListener('click', e => {
    if (value0.value >1 && value0.value.length > 0) {
        addAmount(parseInt(value0.value, 10));
        document.querySelector('.success-modal-wrapper').classList.remove('closeMenu');
        document.querySelector('.success-modal-wrapper').classList.add('openMenu');
        document.querySelector('.selection-modal-wrapper').classList.remove('openMenu');
        value0.classList.remove('incorrect');
        uncheckRadioBtn()
    }
    else {
        value0.classList.add('incorrect');
    }
})

// Adding $25 minimum pledge
const value25 = document.getElementById('25-amount');
const btn25 = document.querySelector('.green-btn.v25');
const left25 = document.querySelectorAll('.left-25');
let pledgersLeft;
btn25.addEventListener('click', e => {
    if (value25.value >=25 && value25.value.length > 0) {
        addAmount(parseInt(value25.value, 10));
        document.querySelector('.success-modal-wrapper').classList.remove('closeMenu');
        document.querySelector('.success-modal-wrapper').classList.add('openMenu');
        document.querySelector('.selection-modal-wrapper').classList.remove('openMenu');
        value25.classList.remove('incorrect');
        pledgersLeft = left25[0].innerHTML - 1;
        left25.forEach(e => {
            e.innerHTML = pledgersLeft;            
        })
        uncheckRadioBtn()
        greyOutOfStock();
    }
    else {
        value25.classList.add('incorrect');
    }
})


// Adding $75 minimum pledge
const value75 = document.getElementById('75-amount');
const btn75 = document.querySelector('.green-btn.v75');
const left75 = document.querySelectorAll('.left-75');
btn75.addEventListener('click', e => {
    if (value75.value >=75 && value75.value.length > 0) {
        addAmount(parseInt(value75.value, 10));
        document.querySelector('.success-modal-wrapper').classList.remove('closeMenu');
        document.querySelector('.success-modal-wrapper').classList.add('openMenu');
        document.querySelector('.selection-modal-wrapper').classList.remove('openMenu');
        value75.classList.remove('incorrect');
        pledgersLeft = left75[0].innerHTML - 1;
        left75.forEach(e => {
            e.innerHTML = pledgersLeft;            
        })
        uncheckRadioBtn();
        greyOutOfStock();
    }
    else {
        value75.classList.add('incorrect');
    }
})

// Adding $200 minimum pledge
const value200 = document.getElementById('200-amount');
const btn200 = document.querySelector('.green-btn.v200');
const left200 = document.querySelectorAll('.left-200');
btn200.addEventListener('click', e => {
    if (value200.value >=200 && value200.value.length > 0) {
        addAmount(parseInt(value200.value, 10));
        document.querySelector('.success-modal-wrapper').classList.remove('closeMenu');
        document.querySelector('.success-modal-wrapper').classList.add('openMenu');
        document.querySelector('.selection-modal-wrapper').classList.remove('openMenu');
        value200.classList.remove('incorrect');
        pledgersLeft = left200[0].innerHTML - 1;
        left200.forEach(e => {
            e.innerHTML = pledgersLeft;            
        })
        uncheckRadioBtn();
        greyOutOfStock();
    }
    else {
        value200.classList.add('incorrect');
    }
})


// Greying out the out of stock pledges amounts
function greyOutOfStock() {
    if (left25[0].innerHTML <= 0 || left25[1].innerHTML <= 0 ) {
            document.querySelector('.about-subsection.v25').classList.add('out-of-stock');
            document.querySelector('.pledge-wrapper.v25').classList.add('out-of-stock');
        }

        if (left75[0].innerHTML <= 0 || left75[1].innerHTML <= 0 ) {
            document.querySelector('.about-subsection.v75').classList.add('out-of-stock');
            document.querySelector('.pledge-wrapper.v75').classList.add('out-of-stock');
        }

        if (left200[0].innerHTML <= 0 || left200[1].innerHTML <= 0 ) {
            document.querySelector('.about-subsection.v200').classList.add('out-of-stock');
            document.querySelector('.pledge-wrapper.v200').classList.add('out-of-stock');
        }
}


