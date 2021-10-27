class search {

    // searchBar() {
    //     $(document).ready(function(){
    //         $("#searchInput").on("keyup", function() {
    //            var value = $(this).val().toLowerCase();
    //            $("#recipesList .col-3").filter(function() {
    //               $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //            });
    //         });
    //       });
    // }

    search() {
    //     let searchInput = document.querySelector('#searchInput')

    //     let value = searchInput.val().toLowerCase();

    //     let recipesList = document.querySelectorAll('#recipesList .col-3')

    //     recipesList.toggle(this.text().toLowerCase().indexOf(value) > -1)

        $("#searchInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#recipesList .col-3").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });

    }
}

export default search