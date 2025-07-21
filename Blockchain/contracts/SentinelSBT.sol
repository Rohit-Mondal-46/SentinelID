// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SentinelSBT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    mapping(address => bool) public hasMinted;

    constructor() ERC721("Sentinel Trust Score", "SBT") {}

    function mint(address user, string memory tokenURI) external onlyOwner {
        require(!hasMinted[user], "Already has SBT");
        _safeMint(user, tokenCounter);
        _setTokenURI(tokenCounter, tokenURI);
        hasMinted[user] = true;
        tokenCounter++;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override {
        require(from == address(0), "This is a soulbound token");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }
}
