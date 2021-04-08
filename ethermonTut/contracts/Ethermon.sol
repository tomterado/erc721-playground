pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Ethermon is ERC721 {
    struct Monster {
        string name;
        uint256 level;
    }

    Monster[] public monsters;
    address public gameOwner;

    constructor() ERC721("Monster", "MON") {
        gameOwner = msg.sender;
    }

    modifier onlyOwnerOf(uint256 _monsterId) {
        require(
            ownerOf(_monsterId) == msg.sender,
            "Must be owner of monster to battle"
        );
        _;
    }

    function battle(uint256 _attackingMonster, uint256 _defendingMonster)
        public
        onlyOwnerOf(_attackingMonster)
    {
        Monster storage attacker = monsters[_attackingMonster];
        Monster storage defender = monsters[_attackingMonster];

        if (attacker.level >= defender.level) {
            attacker.level += 2;
            defender.level += 1;
        } else {
            attacker.level += 1;
            attacker.level += 2;
        }
    }

    function createNewMonster(string memory _name, address _to) public {
        require(msg.sender == gameOwner, "Only game owner can create");
        uint256 id = monsters.length;
        monsters.push(Monster(_name, 1));
        _safeMint(_to, id);
    }
}
