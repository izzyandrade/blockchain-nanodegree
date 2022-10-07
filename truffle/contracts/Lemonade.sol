pragma solidity >=0.7.0 <0.9.0;

contract LemonadeStand {
    uint skuCount;
    address owner;

    enum State {
        ForSale,
        Sold,
        Shipped
    }

    struct Item {
        string name;
        uint sku;
        uint price;
        State state;
        address buyer;
        address seller;
    }

    mapping(uint => Item) items;

    event ForSale(uint skuCount);
    event Sold(uint sku);
    event Shipped(uint sku);

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier verifyCaller(address _address) {
        require(msg.sender == _address);
        _;
    }

    modifier paidEnough(uint price) {
        require(msg.value >= price);
        _;
    }

    modifier isForSale(uint _sku) {
        require(items[_sku].state == State.ForSale);
        _;
    }

    modifier isSold(uint _sku) {
        require(items[_sku].state == State.Sold);
        _;
    }

    constructor() {
        owner = msg.sender;
        skuCount = 0;
    }

    function addItem(string calldata _name, uint _price) public onlyOwner {
        skuCount = skuCount + 1;
        emit ForSale(skuCount);
        items[skuCount] = Item({
            name: _name,
            sku: skuCount,
            price: _price,
            state: State.ForSale,
            seller: msg.sender,
            buyer: address(0)
        });
    }

    function buyItem(uint _sku)
        public
        payable
        isForSale(_sku)
        paidEnough(items[_sku].price)
    {
        address buyer = msg.sender;
        uint price = items[_sku].price;
        uint refund = msg.value - price;
        items[_sku].state = State.Sold;
        items[_sku].buyer = buyer;
        payable(items[_sku].seller).transfer(price);
        if (refund > 0) payable(buyer).transfer(refund);
        emit Sold(_sku);
    }

    function fetchItem(uint _sku)
        public
        view
        returns (
            string memory name,
            uint sku,
            uint price,
            string memory state,
            address buyer,
            address seller
        )
    {
        name = items[_sku].name;
        sku = items[_sku].sku;
        price = items[_sku].price;
        buyer = items[_sku].buyer;
        seller = items[_sku].seller;
        uint stateIndex = uint(items[_sku].state);
        if (stateIndex == 0) state = "For Sale";
        if (stateIndex == 1) state = "Sold";
        if (stateIndex == 2) state = "Shipped";
    }

    function shipItem(uint _sku) public isSold(_sku) onlyOwner {
        items[_sku].state = State.Shipped;
        emit Shipped(_sku);
    }
}
