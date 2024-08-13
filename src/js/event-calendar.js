$(function () {
    moment.locale("uk", {
        week: {
            dow: 1, // Начало недели - понедельник
        },
    });
    $('input[name="daterange"]').daterangepicker(
        {
            opens: "right",
            showCustomRangeLabel: false,
            autoApply: true,
            locale: {
                format: "YYYY-MM-DD",
                applyLabel: "Підтвердити",
                cancelLabel: "Відмінити",
                daysOfWeek: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                monthNames: [
                    "Січень",
                    "Лютий",
                    "Березень",
                    "Квітень",
                    "Травень",
                    "Червень",
                    "Липень",
                    "Серпень",
                    "Вересень",
                    "Жовтень",
                    "Листопад",
                    "Грудень",
                ],
            },
        },
        function (start, end, label) {
            console.log(
                "A new date selection was made: " +
                    start.format("YYYY-MM-DD") +
                    " to " +
                    end.format("YYYY-MM-DD")
            );
        }
    );
});
