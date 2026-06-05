function showPage(pageNumber) {
    const firstRow = document.getElementById("firstRow");
    const secondRow = document.getElementById("secondRow");
    const thirdRow = document.getElementById("thirdRow");
    const fourthRow = document.getElementById("fourthRow");
     const fifthRow = document.getElementById("fifthRow");
    const sixthRow = document.getElementById("sixthRow");

    if (pageNumber === 1) {
      firstRow.hidden = false;
      secondRow.hidden = true;
      thirdRow.hidden = true;
      fourthRow.hidden = true;
       fifthRow.hidden = true;
      sixthRow.hidden = true;
    } else if (pageNumber === 2) {
      firstRow.hidden = true;
      sixthRow.hidden = true;
      thirdRow.hidden = true;
      fourthRow.hidden = true;
      fifthRow.hidden = true; 
      secondRow.hidden = false; 
    }
    else if(pageNumber === 3){
        firstRow.hidden = true;
      sixthRow.hidden = true;
      thirdRow.hidden = false;
      fourthRow.hidden = true;
      fifthRow.hidden = true; 
      secondRow.hidden = true;
    }
    else if(pageNumber === 4){
        firstRow.hidden = true;
      sixthRow.hidden = true;
      thirdRow.hidden = true;
      fourthRow.hidden = false;
      fifthRow.hidden = true; 
      secondRow.hidden = true;
    }
    else if(pageNumber === 5){
        firstRow.hidden = true;
      sixthRow.hidden = true;
      thirdRow.hidden = true;
      fourthRow.hidden = true;
      fifthRow.hidden = false; 
      secondRow.hidden = true;
    }
    else if(pageNumber === 6){
        firstRow.hidden = true;
      sixthRow.hidden = false;
      thirdRow.hidden = true;
      fourthRow.hidden = true;
      fifthRow.hidden = true; 
      secondRow.hidden = true;
    }

  }
