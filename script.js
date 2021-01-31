        function firstClassSeat(isticket, id) {
            let ticketCount = document.getElementById(id);
            let ticketNewNumber = parseInt(ticketCount.value);

            if (isticket) {
                ticketNewNumber = ticketNewNumber + 1;
            } else {
                ticketNewNumber = ticketNewNumber - 1;
                if (ticketNewNumber < 0) {
                    return;
                }
            }
            ticketCount.value = ticketNewNumber;
            totalPrice()
        }

        function totalPrice() {
            let ticketCountInput = document.getElementById('ticket-count');
            let ticketCountNo = parseInt(ticketCountInput.value)
            let economyTicketInput = document.getElementById('economy-ticket-count');
            let economyTicketInputNo = parseInt(economyTicketInput.value);
            const subTotalPrice = ticketCountNo * 150 + economyTicketInputNo * 100;
            document.getElementById('sub-total').innerText = '$' + subTotalPrice;
            const tax = Math.round(subTotalPrice * 0.1);
            document.getElementById('tax-amount').innerText = '$' + tax;
            const grandTotalAmount = subTotalPrice + tax;
            document.getElementById('grandTotalAmount').innerText = '$' + grandTotalAmount;
            const noticeAmount = subTotalPrice + tax;
            document.getElementById('notice-amount').innerText = '$'+ grandTotalAmount
        }

        // extra section js code 
        const hideMainSection = document.getElementById('bookNow');
        hideMainSection.addEventListener('click', function () {
            const hide = document.getElementById('main-content-section');
            hide.style.display = "none"
            const showAnotherSection = document.getElementById('ticket-buy-notice');
            showAnotherSection.style.display = "block"
            console.log(showAnotherSection);
            const flyingFrom = document.getElementById('Flying-From').value
            document.getElementById('FlyingInput').innerText = flyingFrom;
            const FlyingTo = document.getElementById('FlyingTo').value
            document.getElementById('FlyingToInput').innerText = FlyingTo;
        })