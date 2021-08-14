// Submit post on submit
$(document).ready(function () {
$("#friend-form").submit(function (e) {
    // preventing from page reload and default actions
    e.preventDefault();
    // serialize the data for sending the form data.
    var serializedData = $(this).serialize();
    // make POST ajax call
    $.ajax({
        type: 'POST',
        url: "{% url 'post_friend' %}",
        data: serializedData,
        success: function (response) {
            // on successfull creating object
            // 1. clear the form.
            //$("#friend-form").trigger('reset');
            // 2. focus to nickname input
            //$("#id_nick_name").focus();
            addTask()


            // display the newly friend to table.
            /*var instance = JSON.parse(response["instance"]);
            var fields = instance[0]["fields"];
            $("#my_friends ").append(
           `<li className="todo-list__item todo-list__item_style active">
                <label className="checkbox__label todo-list__checkbox-label" htmlFor="id${fields['id']}">
                    <input className="checkbox todo-list__checkbox" type="checkbox" id="id${fields["id"]}" value="no"/>
                    <form className="input-field__form" method="post" action="changeTaskContent/${fields["id"]}/">
                        {% csrf_token %}
                        <input name="text" className="todo-list__text input-field text" type="text" value="${fields["content"]}"/>
                    </form>
                </label>
                <button className="button todo-list__delete-button todo-list__delete-button_hover">
                    <a href="delete/${fields["id"]}"><img className="icon" src="{% static 'icons/close.png' %}"></a>
                </button>
            </li>`
            ).css('display')*/
        },
        error: function (response) {
            // alert the error if any error occured
            alert(response["responseJSON"]["error"]);
        }
    })
    return false;

})
})