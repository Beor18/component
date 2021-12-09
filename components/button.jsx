import React, { useState } from 'react'
import { ethers } from 'ethers'
import { Button, Box, Heading } from '@chakra-ui/react'

const Message = ({text, checkNetwork}) => {
  return (
    <Box>
      <Heading>No tenes instalado Metamask</Heading>
    </Box>
  )
}

const ButtonAdd = () => {
  const [chainId, setChainId] = useState(null)
  const [id, setId] = useState(null)

  // const netWork = async () => {
  //   const provider = await new ethers.providers.Web3Provider(window.ethereum)
  //   const getAddress = await provider.send('eth_requestAccounts', [])

  //   console.log("Fer address >>> ", getAddress)
  //   const network = provider.getNetwork()

  //   network
  //     .then((result) => {
  //       console.log("Fer result >>> ", result)
  //       setId({chainId: result.chainId, address: result})
  //     })
  //     .catch((err) => {
  //       console.log('Message Error >>> ', err)
  //     })
  // }

  const networkName = chainId === 137 ? 'Mainnet' : 'Testnet'

  const addNetwork = (params) => {
    window.ethereum
      .request({
        method: 'wallet_addEthereumChain',
        params,
      })
      .then(() => {
        console.log(`Switch to ${params[0].chainName}`)
        setChainId(parseInt(params[0].chainId))
      })
      .catch((err) => {
        console.log('Message Error >>> ', err)
      })
  }

  const addPolygon = async (e) => {
    //await netWork()
    await addNetwork([
      {
        chainId: '0x64',
        chainName: 'xDai',
        nativeCurrency: {
          name: 'xDai',
          symbol: 'xDai',
          decimals: 18,
        },
        rpcUrls: ['https://rpc.xdaichain.com/'],
      },
    ])
  }

  return (
    <div>
      <Box p={25}>
        {chainId && (
          <div>
            <p>ChainId: {chainId} </p>
            <p>Name Network: {networkName} </p>
          </div>
        )}
        <Button colorScheme="blue" onClick={addPolygon}>
          Agregar Network xDai a Metamask
        </Button>
      </Box>
    </div>
  )
}

export default ButtonAdd
