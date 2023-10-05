 const STATUS_MAP = {
    shelf: {
      color: 'green',
      canReserve: true,
      canCheckout: true,
      canCheckIn: false,
    },
    reserved: {
      color: 'blue',
      canReserve: false,
      canCheckout: true,
      canCheckIn: false,
    },
    overdue: {
      color: 'red',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    },
    checkedOut: {
      color: 'orange',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    },
  };
  
  // Function to update the buttons and status for a given book
  // Ask for help(explaination)  
  function updateBook(bookId, status) {
    const reserveButton = document.querySelector(`#${bookId} .reserve`);
    const checkoutButton = document.querySelector(`#${bookId} .checkout`);
    const checkinButton = document.querySelector(`#${bookId} .checkin`);
    const statusText = document.querySelector(`#${bookId} .status`);
  
    // Set button properties based on STATUS_MAP
    // We use the ! operator to negate(nullify) the values in status, so if status.canReserve is true, then 'reserveButton.disabled' will be false, enabling the button.
    reserveButton.disabled = !status.canReserve;
    checkoutButton.disabled = !status.canCheckout;
    checkinButton.disabled = !status.canCheckIn;
  
    // Set status text color
    statusText.style.color = status.color;
    checkinButton.style.color = ''
  }
  
  // Update each book's buttons and status
  updateBook('book1', STATUS_MAP.overdue);
  updateBook('book2', STATUS_MAP.reserved);
  updateBook('book3', STATUS_MAP.shelf);
  
 

 