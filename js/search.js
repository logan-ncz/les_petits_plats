export default class search {

    search() {

        $("#searchInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#recipesList .col-3").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });

    }
}