const GradientToken = artifacts.require("GradientToken");
// import assertRevert from "zeppelin-solidity/test/helpers/assertRevert";
// import "@openzeppelin/contracts/access/Ownable.sol";
// const { expectRevert } = artifacts.require('@openzeppelin/contacts/test-helpers/expectRevert.js');
// import expectRevert from "@openzeppelin/contacts/test-helpers/expectRevert.js";


contract("Gradient token", accounts => {

    // describe("mint", () => {
    // it("creates token with specified outer and inner colors", async () => {
    //     let instance = await GradientToken.deployed();
    //     let owner = await instance.owner();

    //     let token = await instance.mint("#ff00dd", "#ddddff");

    //     let tokens = await instance.tokensOf(owner);
    //     let gradients = await instance.getGradient(tokens[0]);
    //     assert.deepEqual(gradients, ["#ff00dd", "#ddddff"]);
    // });
    // });


    it("Should make first account an owner", async () => {
        let instance = await GradientToken.deployed();
        let owner = await instance.owner();
        assert.equal(owner, accounts[0]);
    });

        it("allows to mint only to owner", async () => {
        let instance = await GradientToken.deployed();
        let other = accounts[1];
        await instance.transferOwnership(other);
        // await expectRevert(instance.mint("#ff00dd", "#ddddff"));
    });
        
        

});