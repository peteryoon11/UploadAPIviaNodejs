var assert = require("assert");
//nodejs 에성 제공하는 assert 모듈 

describe("array 테스트",function(){
    describe("indexof() 메서드", function(){
        it("값이 없을 때에는 -1을 리턴함 ",function(){
            assert.equal(-1,[1,2,3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
});