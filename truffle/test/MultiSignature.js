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

  it('operational flag is set when multi-party threshold is reached', async () => {
    let admin1 = accounts[1];
    let admin2 = accounts[2];
    let admin3 = accounts[3];

    await config.multiSignature.registerUser(admin1, true, {
      from: config.owner,
    });
    await config.multiSignature.registerUser(admin2, true, {
      from: config.owner,
    });
    await config.multiSignature.registerUser(admin3, true, {
      from: config.owner,
    });

    await config.multiSignature.setOperational(false, { from: admin1 });
    await config.multiSignature.setOperational(false, { from: admin2 });

    let operational = await config.multiSignature.operational.call();

    assert.equal(operational, false, 'The changes did not work');
  });
});
