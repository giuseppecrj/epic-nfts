import { ethers } from "hardhat"

const main = async () => {
    const nftContractFactory = await ethers.getContractFactory('MyEpicNFT')
    const nftContract = await nftContractFactory.deploy()
    await nftContract.deployed()
    console.log(`Contract deployed to: ${nftContract.address}`)

    // Call the function
    let txn = await nftContract.makeAnEpicNFT();
    await txn.wait();
    console.log("Minted NFT #1")
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

runMain()
