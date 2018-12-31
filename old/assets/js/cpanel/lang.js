function changelanggr()
{
    document.getElementById("invoice").innerHTML = "Τιμολόγιο";
    document.getElementById("date").innerHTML = "Ημερομηνία";
    document.getElementById("amount").innerHTML = "Ποσό";
    document.getElementById("item").innerHTML = "Στοιχείο";
    document.getElementById("description").innerHTML = "Περιγραφή";
    document.getElementById("rate").innerHTML = "Επιτόκιο";
    document.getElementById("quantity").innerHTML = "Ποσότητα";
    document.getElementById("price").innerHTML = "Τιμή";
    document.getElementById("subtotal").innerHTML = "Υποσύνολο";
    document.getElementById("tax").innerHTML = "ΦΠΑ ";
    document.getElementById("total").innerHTML = "Σύνολο";

    document.getElementById("gr").className = "active";
    document.getElementById("en").className = "";
}

function changelangen()
{
    document.getElementById("invoice").innerHTML = "Invoice";
    document.getElementById("date").innerHTML = "Date";
    document.getElementById("amount").innerHTML = "Amount";
    document.getElementById("item").innerHTML = "Item";
    document.getElementById("description").innerHTML = "Description";
    document.getElementById("rate").innerHTML = "Rate";
    document.getElementById("quantity").innerHTML = "Quantity";
    document.getElementById("price").innerHTML = "Price";
    document.getElementById("subtotal").innerHTML = "Subtotal ";
    document.getElementById("tax").innerHTML = "TAX ";
    document.getElementById("total").innerHTML = "Total ";

    document.getElementById("en").className = "active";
    document.getElementById("gr").className = "";
}


