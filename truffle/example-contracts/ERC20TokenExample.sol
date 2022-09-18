pragma solidity >=0.8.7;

contract myToken {
    string public constant name = "Udacity Token";
    string public constant symbol = "UDC";
    uint8 public constant decimals = 18;
    uint _totalSupply;

    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowance;

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(
        address indexed tokenOwner,
        address indexed spender,
        uint tokens
    );

    constructor(uint amount) {
        _totalSupply = amount;
        balances[msg.sender] = amount;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address tokenOwner) public view returns (uint balance) {
        require(
            tokenOwner != address(0),
            "Provide valid address to check balance"
        );
        return balances[tokenOwner];
    }

    function transfer(address to, uint tokens) public returns (bool success) {
        require(tokens > 0, "Not enough Ether provided.");
        require(
            tokens <= balances[msg.sender],
            "This account does not have enough balance"
        );
        balances[msg.sender] = balances[msg.sender] - tokens;
        balances[to] = balances[to] + tokens;
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint tokens
    ) public returns (bool success) {
        require(
            balances[from] >= tokens,
            "The sender account does not have enought tokens"
        );
        require(
            allowance[from][msg.sender] >= tokens,
            "This allowance does not have enough transfer limit"
        );
        balances[from] = balances[from] - tokens;
        allowance[from][msg.sender] = allowance[from][msg.sender] - tokens;
        balances[to] = balances[to] + tokens;
        emit Transfer(from, to, tokens);
        return true;
    }

    function approve(address spender, uint tokens)
        public
        returns (bool success)
    {
        require(tokens >= 0, "Please provide valid token value");
        allowance[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }
}
