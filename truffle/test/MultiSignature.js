var Test = require('../config/testConfig.js');

contract('MultiSignature', async (accounts) => {
  var config;
  before('setup contract', async () => {
    config = await Test.Config(accounts);
  });

  it('contract owner can register new user', async () => {
    // ARRANGE
    let caller = accounts[0]; // This should be config.owner or accounts[0] for registering a new user
    let newUser = config.testAddresses[0];

    // ACT
    await config.multiSignature.registerUser(newUser, false, { from: caller });
    let result = await config.multiSignature.isUserRegistered.call(newUser);

    // ASSERT
    assert.equal(result, true, 'Contract owner cannot register new user');
  });

  it('contract owner can set operational flag', async () => {
    let caller = accounts[0];

    await config.multiSignature.setOperational(false, { from: caller });

    let operational = await config.multiSignature.operational();

    assert.equal(operational, false, 'The changes did not work');
  });
});
