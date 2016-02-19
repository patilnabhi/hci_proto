$.mobile.document

    .on( "listviewcreate", "#filter-menu-menu", function( e ) {
        var input,
            listbox = $( "#filter-menu-listbox" ),
            form = listbox.jqmData( "filter-form" ),
            listview = $( e.target );

        if ( !form ) {
            input = $( "<input data-type='search'></input>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            $( "#filter-menu-listbox" )
                .prepend( form )
                .jqmData( "filter-form", form );
        }

        listview.filterable({ input: input });
    })

    .on( "pagebeforeshow pagehide", "#filter-menu-dialog", function( e ) {
        var form = $( "#filter-menu-listbox" ).jqmData( "filter-form" ),
            placeInDialog = ( e.type === "pagebeforeshow" ),
            destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#filter-menu-listbox" );
        form
            .find( "input" )

            .textinput( "option", "inset", !placeInDialog )
            .end()
            .prependTo( destination );
    });