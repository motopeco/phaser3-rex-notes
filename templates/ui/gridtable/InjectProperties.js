var InjectProperties = function (table) {
    Object.defineProperty(table, 'childOY', {
        configurable: true,
        get: function () {
            return table.tableOY;
        },
        set: function (value) {
            table.tableOY = value;
        }
    });
    Object.defineProperty(table, 'topChildOY', {
        get: function () {
            return table.topTableOY;
        }
    });
    Object.defineProperty(table, 'bottomChildOY', {
        get: function () {
            return table.bottomTableOY;
        }
    });
    Object.defineProperty(table, 'childVisibleHeight', {
        get: function () {
            return table.textObjectHeight;
        }
    });
};
export default InjectProperties;