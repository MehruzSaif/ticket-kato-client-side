import React from 'react';

const AskQus = () => {
    return (
        <div class="container section-top-space">
             <h1 className='h1 text-center mt-16 pt-5'>Frequently Asked Questions</h1>
      {/* <h1 class="header text-center"></h1> */}
      <div class="row g-3 align-items-center ttbody">
        <div class="col-lg-6 col-md-12 col-sm-12 my-5 align-items-center ">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item ">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  
                  How to purchase ticket / book seats?
                                
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                To Purchase a Ticket Online: Please visit
                <a href="https://ticket-kato.web.app/"  target="_blank" class="faq-links"> here</a> 
                </div>
              </div>
            </div>
            <div class="accordion-item mt-2 border-top">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  
                  After booking, how do I get my ticket?
                                
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                After issuance of ticket online, reservation copy along with ticketing details will be forwarded to the email account provided at the time of making reservation. Please make a printout of the ticket copy to show at airport as a proof of journey.
                </div>
              </div>
            </div>
            <div class="accordion-item mt-2 border-top">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  
                  How can I use my credit card to book a ticket for someone else?
                                
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Ticket can be purchased using one’s credit card for other person to travel with. In case of issuance this type of ticket, the card holder has to fill up the 
                </div>
              </div>
            </div>
            <div class="accordion-item mt-2 border-top">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  
                  
                  Do I need to reconfirm bookings?
                                
                                
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Once ticket is been issued “Reconfirmation” is not necessary until/ unless the passenger intends to change travel date. For some exceptional cases passengers are advised to contact Ticket Kato Center for reconfirmation of booking.
                </div>
              </div>
            </div>
            <div class="accordion-item mt-2 border-top">
              <h2 class="accordion-header" id="headingfive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  
                  What is the time limit of my booking?
                                
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                The present reservation system does not allow ticket time limit. Once the booking is in progress, confirmation of payment in different mode completes the whole ticketing process. Making delay in completing reservation process will end up with “Session expiry” mode.
                </div>
              </div>
            </div>
            <div class="accordion-item mt-2 border-top">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  
                  
                  Can I revalidate my ticket?
                                
                                
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                For revalidation of issued ticket, please contact Ticket Kato or Call Center.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 my-5 align-items-center ">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item ">
              <h2 class="accordion-header" id="headingSev">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSev"
                  aria-expanded="true" aria-controls="collapseSev">
                  
                  
                  How to request for a group booking in Ticket Kato?
                                
                                
                </button>
              </h2>
              <div id="collapseSev" class="accordion-collapse collapse show" aria-labelledby="heading7"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                
                Please contact Ticket Kato center .
                <a href="https://ticket-kato.web.app/"  target="_blank" class="faq-links"> here</a> 
                </div>
              </div>
            </div>
            <div class="accordion-item mt-2 border-top">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwoo" aria-expanded="false" aria-controls="collapseTwoo">
                  
                  
                  Is group deposit refundable?
                                
                                
                </button>
              </h2>
              <div id="collapseTwoo" class="accordion-collapse collapse" aria-labelledby="headingTwoo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                After issuance of ticket online, reservation copy along with ticketing details will be forwarded to the email account provided at the time of making reservation. Please make a printout of the ticket copy to show at airport as a proof of journey.
                </div>
              </div>
            </div>
            <div class="accordion-item mt-2 border-top">
              <h2 class="accordion-header" id="headingThreee">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThreee" aria-expanded="false" aria-controls="collapseThreee">
                  
                  
                  Are group tickets refundable?
                                
                                
                </button>
              </h2>
              <div id="collapseThreee" class="accordion-collapse collapse" aria-labelledby="headingThreee"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Group tickets are refundable (subject to approved group fare policy - applicable cancelation/ refund charge will be deducted as per fare rule).
                </div>
              </div>
            </div>
            <div class="accordion-item mt-2 border-top">
              <h2 class="accordion-header" id="headingFourr">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFourr" aria-expanded="false" aria-controls="collapseFourr">
                  
                  
                  
                  What payment methods are accepted?
                                
                                
                                
                </button>
              </h2>
              <div id="collapseFourr" class="accordion-collapse collapse" aria-labelledby="headingFourr"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Currently you can pay with credit card : Visa Card , Master Card , BKash & Nagad.
                </div>
              </div>
            </div>
            <div class="accordion-item mt-2 border-top">
              <h2 class="accordion-header" id="headingfivee">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFivee" aria-expanded="false" aria-controls="collapseFivee">
                  
                  
                  Where can I see the payment policy for my booking?
                                
                                
                </button>
              </h2>
              <div id="collapseFivee" class="accordion-collapse collapse" aria-labelledby="headingFivee"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                To see the payment policy please visit: 
                <a href="https://ticket-kato.web.app/"  target="_blank" class="faq-links"> payment policy</a>
                </div>
              </div>
            </div>
            <div class="accordion-item mt-2 border-top">
              <h2 class="accordion-header" id="headingSixx">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSixx" aria-expanded="false" aria-controls="collapseSixx">
                  
                  
                  
                  Can I change seat and meal preferences after completing the booking?
                                
                                
                                
                </button>
              </h2>
              <div id="collapseSixx" class="accordion-collapse collapse" aria-labelledby="headingSixx"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                After completing the booking, only seat preferences can be changed (subject to availability).
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="col-lg-6 col-md-12 col-sm-12 my-5  ">
          <div class="border rounded-3 text-center">
            <img class="img-fluid" src="./images/anser.png" alt=""/>
          </div>
        </div> */}
      </div>
    
        </div>
    );
};

export default AskQus;