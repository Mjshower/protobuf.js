var tape = require("tape");

var protobuf = require("..");

tape.test("uncommon statements", function(test) {
    protobuf.load("tests/data/uncommon.proto", function(err, root) {
        if (err || !root)
            test.fail(err && err.message || "should parse without errors");
        new protobuf.Root().load("tests/data/uncommon.proto", { keepCase: true }, function(err, root) {
            if (err || !root)
                test.fail(err && err.message || "should parse without errors");
            test.end();
        });
    });
});
