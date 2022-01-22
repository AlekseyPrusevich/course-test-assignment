let hideBlock = [
    { opacity: 1 }, { opacity: 0 }
];
let showBlock = [
    { opacity: 0 }, { opacity: 1 }
];

let style = hideBlock;
let dispaly = "none";

let actionVisible = document.querySelector(".collapsible__action--visible");
let actionHidden = document.querySelector(".collapsible__action--hidden");

actionHidden.style.display = "none";
  
document.querySelector(".collapsible__button").onclick  = function() {

    if(dispaly === "none") {
        actionVisible.style.display = "none";
        actionHidden.style.display = "block";

        document.querySelector(".collapsible__content").animate( style, 
            {
                duration: 600,
            }
        );  

        setTimeout(() => {  
            document.querySelector(".collapsible__content").style.display = dispaly;       
            style = showBlock;
            dispaly = "block";
        }, 560);
    }
    else {
        document.querySelector(".collapsible__content").style.display = dispaly; 
        actionVisible.style.display = "block";
        actionHidden.style.display = "none";

        document.querySelector(".collapsible__content").animate( style, 
            {
                duration: 600,
            }
        );  
    
        style = hideBlock;
        dispaly = "none";
    }
}