$(function () {

    function displayNextGroup() {
        var nextGroupIndex = Math.floor(Math.random() * groups.length);
        var nextGroup = groups[nextGroupIndex];

        var groupHtml = [];
        groupHtml.push('<h1>Group ' + nextGroup.groupNumber + ':</h1>');

        groupHtml.push('<ul>');
        nextGroup.studentNames.forEach(function (studentName) {
            groupHtml.push('<li>' + studentName + '</li>');
        });
        groupHtml.push('</ul>');


        $("#group").html(groupHtml.join(''));

        return nextGroupIndex;
    }

    function removeGroupFromList(groupIndexToRemove) {
        groups.splice(groupIndexToRemove, 1);
    }

    $("#next-group-button").on("click", function () {
        var groupIndex = displayNextGroup();

        removeGroupFromList(groupIndex);
    });

    var groups = [
        {
            groupNumber: 1,
            studentNames: [
                'Hassan',
                'Peter',
                'Randy',
                'Neil'
            ]
        },
        {
            groupNumber: 2,
            studentNames: [
                'Ray',
                'Julian',
                'Dee',
                'Brandon'
            ]
        },
        {
            groupNumber: 3,
            studentNames: [
                'Liam',
                'Dan',
                'Maggie',
                'Micheal'
            ]
        },
        {
            groupNumber: 4,
            studentNames: [
                'Joy',
                'Josh',
                'Blake',
                'Matt'
            ]
        },
        {
            groupNumber: 5,
            studentNames: [
                'Charles',
                'Lanchana',
                'Rush',
                'Felicia'
            ]
        },
        {
            groupNumber: 6,
            studentNames: [
                'Ashley',
                'Erin',
                'Harry'
            ]
        },
        {
            groupNumber: 7,
            studentNames: [
                'David',
                'Jibril',
                'Aylin'
            ]
        }

    ];

});
