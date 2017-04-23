$(document).ready(function(){
    $('.slimmenu').slimmenu(
    {
        resizeWidth: '950', /* Navigation menu will be collapsed when document width is below this size or equal to it. */
        initiallyVisible: false, /* Make main navigation menu initially visible on mobile devices without the need to click on expand/collapse icon. */
        collapserTitle: 'Головне меню', /* Collapsed menu title. */
        animSpeed: 'medium', /* Speed of the sub menu expand and collapse animation. */
        easingEffect: null, /* Easing effect that will be used when expanding and collapsing menu and sub menus. */
        indentChildren: false, /* Indentation option for the responsive collapsed sub menus. If set to true, all sub menus will be indented with the value of the option below. */
        childrenIndenter: '&nbsp;', /* Responsive sub menus will be indented with this character according to their level. */
        expandIcon: "<i>&#9660/;</i>", /* An icon to be displayed next to parent menu of collapsed sub menus. */
        collapseIcon: '<i>&#9650;</i>' /* An icon to be displayed next to parent menu of expanded sub menus. */
    });
});