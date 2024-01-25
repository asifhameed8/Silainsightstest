export const ERC_721 = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_owner',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'qty',
                type: 'uint256'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            }
        ],
        name: 'AdminMinted',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'approved',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'ApprovalForAll',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'minter',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'uri',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'Minted',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'minter',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256[]',
                name: 'tokenIds',
                type: 'uint256[]'
            },
            {
                indexed: false,
                internalType: 'string[]',
                name: 'URIs',
                type: 'string[]'
            }
        ],
        name: 'MultiMinted',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'maxSupply',
                type: 'uint256'
            }
        ],
        name: 'SetMaxSupply',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'receiver',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'rate',
                type: 'uint256'
            }
        ],
        name: 'SetRoyalty',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'Transfer',
        type: 'event'
    },
    {
        inputs: [],
        name: 'MAX_ROYALTY',
        outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'contract IERC20',
                name: 'erc20',
                type: 'address'
            }
        ],
        name: 'clearStuckTokens',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'creators',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
        name: 'exists',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'getApproved',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            }
        ],
        name: 'isApprovedForAll',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'maxSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: '_to', type: 'address' },
            { internalType: 'string', name: 'uri', type: 'string' }
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string[]',
                name: 'URIs',
                type: 'string[]'
            },
            { internalType: 'address', name: '_to', type: 'address' }
        ],
        name: 'multiMint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'ownerOf',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_tokenId',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_salePrice',
                type: 'uint256'
            }
        ],
        name: 'royaltyInfo',
        outputs: [
            {
                internalType: 'address',
                name: 'receiver',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'royaltyAmount',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            { internalType: 'address', name: 'to', type: 'address' },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            { internalType: 'address', name: 'to', type: 'address' },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            },
            { internalType: 'bytes', name: '_data', type: 'bytes' }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            { internalType: 'bool', name: 'approved', type: 'bool' }
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_maxSupply',
                type: 'uint256'
            }
        ],
        name: 'setMaxSupply',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_tokenId',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: '_receiver',
                type: 'address'
            },
            {
                internalType: 'uint16',
                name: '_royalty',
                type: 'uint16'
            }
        ],
        name: 'setRoyalty',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4'
            }
        ],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256'
            }
        ],
        name: 'tokenByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256'
            }
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'tokenURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_owner',
                type: 'address'
            }
        ],
        name: 'tokensOfOwner',
        outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            { internalType: 'address', name: 'to', type: 'address' },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];

export const STAKING_ABI = [
    {
        inputs: [
            { internalType: 'address', name: '_token', type: 'address' },
            { internalType: 'address', name: '_nftToken', type: 'address' }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'account', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'stakeAmount', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: '_nftId', type: 'uint256' }
        ],
        name: 'Staked',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'account', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'stakeAmount', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'nftId', type: 'uint256' }
        ],
        name: 'Unstaked',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: 'uint256', name: '_nftId', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: '_stakeAmount', type: 'uint256' }
        ],
        name: 'UpdateMinStakeAmount',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [{ indexed: true, internalType: 'address', name: '_nftAddress', type: 'address' }],
        name: 'UpdateNftAddress',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: 'uint256', name: '_nftId', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: '_stakeTime', type: 'uint256' }
        ],
        name: 'UpdateStakeTime',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [{ indexed: true, internalType: 'address', name: '_newToken', type: 'address' }],
        name: 'UpdateToken',
        type: 'event'
    },
    {
        inputs: [{ internalType: 'address', name: 'wallet', type: 'address' }],
        name: 'getStakeInfo',
        outputs: [
            {
                components: [
                    { internalType: 'uint256', name: 'nftId', type: 'uint256' },
                    { internalType: 'uint256', name: 'stakeId', type: 'uint256' },
                    { internalType: 'uint256', name: 'unlockTime', type: 'uint256' },
                    { internalType: 'uint256', name: 'stakedAmount', type: 'uint256' },
                    { internalType: 'address', name: 'owner', type: 'address' }
                ],
                internalType: 'struct MRSTAKE.Stake[]',
                name: '',
                type: 'tuple[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'minStakeAmount',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'nftToken',
        outputs: [{ internalType: 'contract NFTMINT1155', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'uint256', name: 'stakeId', type: 'uint256' }],
        name: 'reStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [
            { internalType: 'uint256', name: 'nftId', type: 'uint256' },
            { internalType: 'uint256', name: 'amountToMint', type: 'uint256' }
        ],
        name: 'stake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'stakeTime',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'token',
        outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'stakeId', type: 'uint256' }],
        name: 'unstake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_minStakeAmount', type: 'uint256' },
            { internalType: 'uint256', name: '_nftId', type: 'uint256' }
        ],
        name: 'updateMinStakeAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '_nftAddress', type: 'address' }],
        name: 'updateNftAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_stakeTime', type: 'uint256' },
            { internalType: 'uint256', name: '_nftId', type: 'uint256' }
        ],
        name: 'updateStakeTime',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'newToken', type: 'address' }],
        name: 'updateToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: '_to', type: 'address' },
            { internalType: 'uint256', name: '_amount', type: 'uint256' }
        ],
        name: 'withdrawETH',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: '_token', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        name: 'withdrawToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];

export const STAKING_NFT_ABI = [
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'string', name: 'name_', type: 'string' },
            { internalType: 'string', name: 'symbol_', type: 'string' },
            { internalType: 'uint96', name: '_royaltyFee', type: 'uint96' }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'account', type: 'address' },
            { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
            { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
        ],
        name: 'ApprovalForAll',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
            { indexed: true, internalType: 'address', name: 'from', type: 'address' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' },
            { indexed: false, internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
            { indexed: false, internalType: 'uint256[]', name: 'values', type: 'uint256[]' }
        ],
        name: 'TransferBatch',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
            { indexed: true, internalType: 'address', name: 'from', type: 'address' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'TransferSingle',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: 'string', name: 'value', type: 'string' },
            { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }
        ],
        name: 'URI',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
            { indexed: true, internalType: 'address', name: 'from', type: 'address' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'burnItem',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: 'uint256', name: 'maxSupply', type: 'uint256' },
            { indexed: false, internalType: 'string', name: 'uri', type: 'string' },
            { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' }
        ],
        name: 'collectionCreated',
        type: 'event'
    },
    {
        inputs: [
            { internalType: 'address', name: '_minterAddress', type: 'address' },
            { internalType: 'bool', name: '_access', type: 'bool' }
        ],
        name: 'addMinter',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'account', type: 'address' },
            { internalType: 'uint256', name: 'id', type: 'uint256' }
        ],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address[]', name: 'accounts', type: 'address[]' },
            { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }
        ],
        name: 'balanceOfBatch',
        outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'account', type: 'address' },
            { internalType: 'uint256', name: 'id', type: 'uint256' },
            { internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'account', type: 'address' },
            { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
            { internalType: 'uint256[]', name: 'values', type: 'uint256[]' }
        ],
        name: 'burnBatch',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'account', type: 'address' },
            { internalType: 'uint256', name: 'id', type: 'uint256' },
            { internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        name: 'burnForUpgrade',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_maxSupply', type: 'uint256' },
            { internalType: 'string', name: '_collection_uri', type: 'string' }
        ],
        name: 'createCollection',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
        name: 'exists',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'account', type: 'address' },
            { internalType: 'address', name: 'operator', type: 'address' }
        ],
        name: 'isApprovedForAll',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'account', type: 'address' },
            { internalType: 'uint256', name: 'id', type: 'uint256' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
            { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
            { internalType: 'bytes', name: 'data', type: 'bytes' }
        ],
        name: 'mintBatch',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'minters',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [
            { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
            { internalType: 'uint256', name: '_salePrice', type: 'uint256' }
        ],
        name: 'royaltyInfo',
        outputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'uint256', name: '', type: 'uint256' }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
            { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
            { internalType: 'bytes', name: 'data', type: 'bytes' }
        ],
        name: 'safeBatchTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'id', type: 'uint256' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
            { internalType: 'bytes', name: 'data', type: 'bytes' }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'operator', type: 'address' },
            { internalType: 'bool', name: 'approved', type: 'bool' }
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: '_receiver', type: 'address' },
            { internalType: 'uint96', name: '_royaltyFee', type: 'uint96' }
        ],
        name: 'setRoyalty',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'string', name: '_newuri', type: 'string' },
            { internalType: 'uint256', name: '_tokenID', type: 'uint256' }
        ],
        name: 'setURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenID', type: 'uint256' }],
        name: 'tokenInfo',
        outputs: [
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'string', name: '', type: 'string' }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenID', type: 'uint256' }],
        name: 'uri',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
    }
];

export const bytecode = {
    functionDebugData: {
        '@_1311': {
            entryPoint: null,
            id: 1311,
            parameterSlots: 0,
            returnSlots: 0
        },
        '@_1994': {
            entryPoint: null,
            id: 1994,
            parameterSlots: 2,
            returnSlots: 0
        },
        '@_3117': {
            entryPoint: null,
            id: 3117,
            parameterSlots: 5,
            returnSlots: 0
        },
        '@_msgSender_1279': {
            entryPoint: 367,
            id: 1279,
            parameterSlots: 0,
            returnSlots: 1
        },
        '@_transferOwnership_1399': {
            entryPoint: 375,
            id: 1399,
            parameterSlots: 1,
            returnSlots: 0
        },
        abi_decode_available_length_t_string_memory_ptr_fromMemory: {
            entryPoint: 850,
            id: null,
            parameterSlots: 3,
            returnSlots: 1
        },
        abi_decode_t_address_fromMemory: {
            entryPoint: 1113,
            id: null,
            parameterSlots: 2,
            returnSlots: 1
        },
        abi_decode_t_string_memory_ptr_fromMemory: {
            entryPoint: 925,
            id: null,
            parameterSlots: 2,
            returnSlots: 1
        },
        abi_decode_t_uint256_fromMemory: {
            entryPoint: 1012,
            id: null,
            parameterSlots: 2,
            returnSlots: 1
        },
        abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_uint256t_uint256t_address_fromMemory: {
            entryPoint: 1136,
            id: null,
            parameterSlots: 2,
            returnSlots: 5
        },
        abi_encode_t_stringliteral_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb_to_t_string_memory_ptr_fromStack: {
            entryPoint: 2238,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        abi_encode_tuple_t_stringliteral_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb__to_t_string_memory_ptr__fromStack_reversed:
            {
                entryPoint: 2277,
                id: null,
                parameterSlots: 1,
                returnSlots: 1
            },
        allocate_memory: {
            entryPoint: 721,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        allocate_unbounded: {
            entryPoint: 573,
            id: null,
            parameterSlots: 0,
            returnSlots: 1
        },
        array_allocation_size_t_string_memory_ptr: {
            entryPoint: 752,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        array_dataslot_t_string_storage: {
            entryPoint: 1445,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        array_length_t_string_memory_ptr: {
            entryPoint: 1334,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        array_storeLengthForEncoding_t_string_memory_ptr_fromStack: {
            entryPoint: 2142,
            id: null,
            parameterSlots: 2,
            returnSlots: 1
        },
        clean_up_bytearray_end_slots_t_string_storage: {
            entryPoint: 1756,
            id: null,
            parameterSlots: 3,
            returnSlots: 0
        },
        cleanup_t_address: {
            entryPoint: 1067,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        cleanup_t_uint160: {
            entryPoint: 1035,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        cleanup_t_uint256: {
            entryPoint: 976,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        clear_storage_range_t_bytes1: {
            entryPoint: 1717,
            id: null,
            parameterSlots: 2,
            returnSlots: 0
        },
        convert_t_uint256_to_t_uint256: {
            entryPoint: 1591,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage: {
            entryPoint: 1911,
            id: null,
            parameterSlots: 2,
            returnSlots: 0
        },
        copy_memory_to_memory_with_cleanup: {
            entryPoint: 806,
            id: null,
            parameterSlots: 3,
            returnSlots: 0
        },
        divide_by_32_ceil: {
            entryPoint: 1466,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        extract_byte_array_length: {
            entryPoint: 1392,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        extract_used_part_and_set_length_of_short_byte_array: {
            entryPoint: 1881,
            id: null,
            parameterSlots: 2,
            returnSlots: 1
        },
        finalize_allocation: {
            entryPoint: 667,
            id: null,
            parameterSlots: 2,
            returnSlots: 0
        },
        identity: {
            entryPoint: 1581,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        mask_bytes_dynamic: {
            entryPoint: 1849,
            id: null,
            parameterSlots: 2,
            returnSlots: 1
        },
        panic_error_0x22: {
            entryPoint: 1345,
            id: null,
            parameterSlots: 0,
            returnSlots: 0
        },
        panic_error_0x41: {
            entryPoint: 620,
            id: null,
            parameterSlots: 0,
            returnSlots: 0
        },
        prepare_store_t_uint256: {
            entryPoint: 1631,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d: {
            entryPoint: 593,
            id: null,
            parameterSlots: 0,
            returnSlots: 0
        },
        revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae: {
            entryPoint: 598,
            id: null,
            parameterSlots: 0,
            returnSlots: 0
        },
        revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db: {
            entryPoint: 588,
            id: null,
            parameterSlots: 0,
            returnSlots: 0
        },
        revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b: {
            entryPoint: 583,
            id: null,
            parameterSlots: 0,
            returnSlots: 0
        },
        round_up_to_mul_of_32: {
            entryPoint: 603,
            id: null,
            parameterSlots: 1,
            returnSlots: 1
        },
        shift_left_dynamic: {
            entryPoint: 1482,
            id: null,
            parameterSlots: 2,
            returnSlots: 1
        },
        shift_right_unsigned_dynamic: {
            entryPoint: 1836,
            id: null,
            parameterSlots: 2,
            returnSlots: 1
        },
        storage_set_to_zero_t_uint256: {
            entryPoint: 1689,
            id: null,
            parameterSlots: 2,
            returnSlots: 0
        },
        store_literal_in_memory_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb: {
            entryPoint: 2159,
            id: null,
            parameterSlots: 1,
            returnSlots: 0
        },
        update_byte_slice_dynamic32: {
            entryPoint: 1495,
            id: null,
            parameterSlots: 3,
            returnSlots: 1
        },
        update_storage_value_t_uint256_to_t_uint256: {
            entryPoint: 1641,
            id: null,
            parameterSlots: 3,
            returnSlots: 0
        },
        validator_revert_t_address: {
            entryPoint: 1087,
            id: null,
            parameterSlots: 1,
            returnSlots: 0
        },
        validator_revert_t_uint256: {
            entryPoint: 986,
            id: null,
            parameterSlots: 1,
            returnSlots: 0
        },
        zero_value_for_split_t_uint256: {
            entryPoint: 1684,
            id: null,
            parameterSlots: 0,
            returnSlots: 1
        }
    },
    generatedSources: [
        {
            ast: {
                nodeType: 'YulBlock',
                src: '0:11042:1',
                statements: [
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '47:35:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '57:19:1',
                                    value: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '73:2:1',
                                                type: '',
                                                value: '64'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mload',
                                            nodeType: 'YulIdentifier',
                                            src: '67:5:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '67:9:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'memPtr',
                                            nodeType: 'YulIdentifier',
                                            src: '57:6:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'allocate_unbounded',
                        nodeType: 'YulFunctionDefinition',
                        returnVariables: [
                            {
                                name: 'memPtr',
                                nodeType: 'YulTypedName',
                                src: '40:6:1',
                                type: ''
                            }
                        ],
                        src: '7:75:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '177:28:1',
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '194:1:1',
                                                type: '',
                                                value: '0'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '197:1:1',
                                                type: '',
                                                value: '0'
                                            }
                                        ],
                                        functionName: {
                                            name: 'revert',
                                            nodeType: 'YulIdentifier',
                                            src: '187:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '187:12:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '187:12:1'
                                }
                            ]
                        },
                        name: 'revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b',
                        nodeType: 'YulFunctionDefinition',
                        src: '88:117:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '300:28:1',
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '317:1:1',
                                                type: '',
                                                value: '0'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '320:1:1',
                                                type: '',
                                                value: '0'
                                            }
                                        ],
                                        functionName: {
                                            name: 'revert',
                                            nodeType: 'YulIdentifier',
                                            src: '310:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '310:12:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '310:12:1'
                                }
                            ]
                        },
                        name: 'revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db',
                        nodeType: 'YulFunctionDefinition',
                        src: '211:117:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '423:28:1',
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '440:1:1',
                                                type: '',
                                                value: '0'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '443:1:1',
                                                type: '',
                                                value: '0'
                                            }
                                        ],
                                        functionName: {
                                            name: 'revert',
                                            nodeType: 'YulIdentifier',
                                            src: '433:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '433:12:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '433:12:1'
                                }
                            ]
                        },
                        name: 'revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d',
                        nodeType: 'YulFunctionDefinition',
                        src: '334:117:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '546:28:1',
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '563:1:1',
                                                type: '',
                                                value: '0'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '566:1:1',
                                                type: '',
                                                value: '0'
                                            }
                                        ],
                                        functionName: {
                                            name: 'revert',
                                            nodeType: 'YulIdentifier',
                                            src: '556:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '556:12:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '556:12:1'
                                }
                            ]
                        },
                        name: 'revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae',
                        nodeType: 'YulFunctionDefinition',
                        src: '457:117:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '628:54:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '638:38:1',
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'value',
                                                        nodeType: 'YulIdentifier',
                                                        src: '656:5:1'
                                                    },
                                                    {
                                                        kind: 'number',
                                                        nodeType: 'YulLiteral',
                                                        src: '663:2:1',
                                                        type: '',
                                                        value: '31'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'add',
                                                    nodeType: 'YulIdentifier',
                                                    src: '652:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '652:14:1'
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        kind: 'number',
                                                        nodeType: 'YulLiteral',
                                                        src: '672:2:1',
                                                        type: '',
                                                        value: '31'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'not',
                                                    nodeType: 'YulIdentifier',
                                                    src: '668:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '668:7:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'and',
                                            nodeType: 'YulIdentifier',
                                            src: '648:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '648:28:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'result',
                                            nodeType: 'YulIdentifier',
                                            src: '638:6:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'round_up_to_mul_of_32',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '611:5:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'result',
                                nodeType: 'YulTypedName',
                                src: '621:6:1',
                                type: ''
                            }
                        ],
                        src: '580:102:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '716:152:1',
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '733:1:1',
                                                type: '',
                                                value: '0'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '736:77:1',
                                                type: '',
                                                value: '35408467139433450592217433187231851964531694900788300625387963629091585785856'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mstore',
                                            nodeType: 'YulIdentifier',
                                            src: '726:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '726:88:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '726:88:1'
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '830:1:1',
                                                type: '',
                                                value: '4'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '833:4:1',
                                                type: '',
                                                value: '0x41'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mstore',
                                            nodeType: 'YulIdentifier',
                                            src: '823:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '823:15:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '823:15:1'
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '854:1:1',
                                                type: '',
                                                value: '0'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '857:4:1',
                                                type: '',
                                                value: '0x24'
                                            }
                                        ],
                                        functionName: {
                                            name: 'revert',
                                            nodeType: 'YulIdentifier',
                                            src: '847:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '847:15:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '847:15:1'
                                }
                            ]
                        },
                        name: 'panic_error_0x41',
                        nodeType: 'YulFunctionDefinition',
                        src: '688:180:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '917:238:1',
                            statements: [
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '927:58:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'memPtr',
                                                nodeType: 'YulIdentifier',
                                                src: '949:6:1'
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        name: 'size',
                                                        nodeType: 'YulIdentifier',
                                                        src: '979:4:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'round_up_to_mul_of_32',
                                                    nodeType: 'YulIdentifier',
                                                    src: '957:21:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '957:27:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'add',
                                            nodeType: 'YulIdentifier',
                                            src: '945:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '945:40:1'
                                    },
                                    variables: [
                                        {
                                            name: 'newFreePtr',
                                            nodeType: 'YulTypedName',
                                            src: '931:10:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '1096:22:1',
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: 'panic_error_0x41',
                                                        nodeType: 'YulIdentifier',
                                                        src: '1098:16:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '1098:18:1'
                                                },
                                                nodeType: 'YulExpressionStatement',
                                                src: '1098:18:1'
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'newFreePtr',
                                                        nodeType: 'YulIdentifier',
                                                        src: '1039:10:1'
                                                    },
                                                    {
                                                        kind: 'number',
                                                        nodeType: 'YulLiteral',
                                                        src: '1051:18:1',
                                                        type: '',
                                                        value: '0xffffffffffffffff'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'gt',
                                                    nodeType: 'YulIdentifier',
                                                    src: '1036:2:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '1036:34:1'
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        name: 'newFreePtr',
                                                        nodeType: 'YulIdentifier',
                                                        src: '1075:10:1'
                                                    },
                                                    {
                                                        name: 'memPtr',
                                                        nodeType: 'YulIdentifier',
                                                        src: '1087:6:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'lt',
                                                    nodeType: 'YulIdentifier',
                                                    src: '1072:2:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '1072:22:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'or',
                                            nodeType: 'YulIdentifier',
                                            src: '1033:2:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '1033:62:1'
                                    },
                                    nodeType: 'YulIf',
                                    src: '1030:88:1'
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '1134:2:1',
                                                type: '',
                                                value: '64'
                                            },
                                            {
                                                name: 'newFreePtr',
                                                nodeType: 'YulIdentifier',
                                                src: '1138:10:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mstore',
                                            nodeType: 'YulIdentifier',
                                            src: '1127:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '1127:22:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '1127:22:1'
                                }
                            ]
                        },
                        name: 'finalize_allocation',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'memPtr',
                                nodeType: 'YulTypedName',
                                src: '903:6:1',
                                type: ''
                            },
                            {
                                name: 'size',
                                nodeType: 'YulTypedName',
                                src: '911:4:1',
                                type: ''
                            }
                        ],
                        src: '874:281:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '1202:88:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '1212:30:1',
                                    value: {
                                        arguments: [],
                                        functionName: {
                                            name: 'allocate_unbounded',
                                            nodeType: 'YulIdentifier',
                                            src: '1222:18:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '1222:20:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'memPtr',
                                            nodeType: 'YulIdentifier',
                                            src: '1212:6:1'
                                        }
                                    ]
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: 'memPtr',
                                                nodeType: 'YulIdentifier',
                                                src: '1271:6:1'
                                            },
                                            {
                                                name: 'size',
                                                nodeType: 'YulIdentifier',
                                                src: '1279:4:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'finalize_allocation',
                                            nodeType: 'YulIdentifier',
                                            src: '1251:19:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '1251:33:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '1251:33:1'
                                }
                            ]
                        },
                        name: 'allocate_memory',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'size',
                                nodeType: 'YulTypedName',
                                src: '1186:4:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'memPtr',
                                nodeType: 'YulTypedName',
                                src: '1195:6:1',
                                type: ''
                            }
                        ],
                        src: '1161:129:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '1363:241:1',
                            statements: [
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '1468:22:1',
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: 'panic_error_0x41',
                                                        nodeType: 'YulIdentifier',
                                                        src: '1470:16:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '1470:18:1'
                                                },
                                                nodeType: 'YulExpressionStatement',
                                                src: '1470:18:1'
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: 'length',
                                                nodeType: 'YulIdentifier',
                                                src: '1440:6:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '1448:18:1',
                                                type: '',
                                                value: '0xffffffffffffffff'
                                            }
                                        ],
                                        functionName: {
                                            name: 'gt',
                                            nodeType: 'YulIdentifier',
                                            src: '1437:2:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '1437:30:1'
                                    },
                                    nodeType: 'YulIf',
                                    src: '1434:56:1'
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '1500:37:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'length',
                                                nodeType: 'YulIdentifier',
                                                src: '1530:6:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'round_up_to_mul_of_32',
                                            nodeType: 'YulIdentifier',
                                            src: '1508:21:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '1508:29:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'size',
                                            nodeType: 'YulIdentifier',
                                            src: '1500:4:1'
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '1574:23:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'size',
                                                nodeType: 'YulIdentifier',
                                                src: '1586:4:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '1592:4:1',
                                                type: '',
                                                value: '0x20'
                                            }
                                        ],
                                        functionName: {
                                            name: 'add',
                                            nodeType: 'YulIdentifier',
                                            src: '1582:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '1582:15:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'size',
                                            nodeType: 'YulIdentifier',
                                            src: '1574:4:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'array_allocation_size_t_string_memory_ptr',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'length',
                                nodeType: 'YulTypedName',
                                src: '1347:6:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'size',
                                nodeType: 'YulTypedName',
                                src: '1358:4:1',
                                type: ''
                            }
                        ],
                        src: '1296:308:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '1672:184:1',
                            statements: [
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '1682:10:1',
                                    value: {
                                        kind: 'number',
                                        nodeType: 'YulLiteral',
                                        src: '1691:1:1',
                                        type: '',
                                        value: '0'
                                    },
                                    variables: [
                                        {
                                            name: 'i',
                                            nodeType: 'YulTypedName',
                                            src: '1686:1:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '1751:63:1',
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [
                                                        {
                                                            arguments: [
                                                                {
                                                                    name: 'dst',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '1776:3:1'
                                                                },
                                                                {
                                                                    name: 'i',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '1781:1:1'
                                                                }
                                                            ],
                                                            functionName: {
                                                                name: 'add',
                                                                nodeType: 'YulIdentifier',
                                                                src: '1772:3:1'
                                                            },
                                                            nodeType: 'YulFunctionCall',
                                                            src: '1772:11:1'
                                                        },
                                                        {
                                                            arguments: [
                                                                {
                                                                    arguments: [
                                                                        {
                                                                            name: 'src',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '1795:3:1'
                                                                        },
                                                                        {
                                                                            name: 'i',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '1800:1:1'
                                                                        }
                                                                    ],
                                                                    functionName: {
                                                                        name: 'add',
                                                                        nodeType: 'YulIdentifier',
                                                                        src: '1791:3:1'
                                                                    },
                                                                    nodeType: 'YulFunctionCall',
                                                                    src: '1791:11:1'
                                                                }
                                                            ],
                                                            functionName: {
                                                                name: 'mload',
                                                                nodeType: 'YulIdentifier',
                                                                src: '1785:5:1'
                                                            },
                                                            nodeType: 'YulFunctionCall',
                                                            src: '1785:18:1'
                                                        }
                                                    ],
                                                    functionName: {
                                                        name: 'mstore',
                                                        nodeType: 'YulIdentifier',
                                                        src: '1765:6:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '1765:39:1'
                                                },
                                                nodeType: 'YulExpressionStatement',
                                                src: '1765:39:1'
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: 'i',
                                                nodeType: 'YulIdentifier',
                                                src: '1712:1:1'
                                            },
                                            {
                                                name: 'length',
                                                nodeType: 'YulIdentifier',
                                                src: '1715:6:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'lt',
                                            nodeType: 'YulIdentifier',
                                            src: '1709:2:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '1709:13:1'
                                    },
                                    nodeType: 'YulForLoop',
                                    post: {
                                        nodeType: 'YulBlock',
                                        src: '1723:19:1',
                                        statements: [
                                            {
                                                nodeType: 'YulAssignment',
                                                src: '1725:15:1',
                                                value: {
                                                    arguments: [
                                                        {
                                                            name: 'i',
                                                            nodeType: 'YulIdentifier',
                                                            src: '1734:1:1'
                                                        },
                                                        {
                                                            kind: 'number',
                                                            nodeType: 'YulLiteral',
                                                            src: '1737:2:1',
                                                            type: '',
                                                            value: '32'
                                                        }
                                                    ],
                                                    functionName: {
                                                        name: 'add',
                                                        nodeType: 'YulIdentifier',
                                                        src: '1730:3:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '1730:10:1'
                                                },
                                                variableNames: [
                                                    {
                                                        name: 'i',
                                                        nodeType: 'YulIdentifier',
                                                        src: '1725:1:1'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    pre: {
                                        nodeType: 'YulBlock',
                                        src: '1705:3:1',
                                        statements: []
                                    },
                                    src: '1701:113:1'
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'dst',
                                                        nodeType: 'YulIdentifier',
                                                        src: '1834:3:1'
                                                    },
                                                    {
                                                        name: 'length',
                                                        nodeType: 'YulIdentifier',
                                                        src: '1839:6:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'add',
                                                    nodeType: 'YulIdentifier',
                                                    src: '1830:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '1830:16:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '1848:1:1',
                                                type: '',
                                                value: '0'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mstore',
                                            nodeType: 'YulIdentifier',
                                            src: '1823:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '1823:27:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '1823:27:1'
                                }
                            ]
                        },
                        name: 'copy_memory_to_memory_with_cleanup',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'src',
                                nodeType: 'YulTypedName',
                                src: '1654:3:1',
                                type: ''
                            },
                            {
                                name: 'dst',
                                nodeType: 'YulTypedName',
                                src: '1659:3:1',
                                type: ''
                            },
                            {
                                name: 'length',
                                nodeType: 'YulTypedName',
                                src: '1664:6:1',
                                type: ''
                            }
                        ],
                        src: '1610:246:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '1957:339:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '1967:75:1',
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'length',
                                                        nodeType: 'YulIdentifier',
                                                        src: '2034:6:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'array_allocation_size_t_string_memory_ptr',
                                                    nodeType: 'YulIdentifier',
                                                    src: '1992:41:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '1992:49:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'allocate_memory',
                                            nodeType: 'YulIdentifier',
                                            src: '1976:15:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '1976:66:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'array',
                                            nodeType: 'YulIdentifier',
                                            src: '1967:5:1'
                                        }
                                    ]
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: 'array',
                                                nodeType: 'YulIdentifier',
                                                src: '2058:5:1'
                                            },
                                            {
                                                name: 'length',
                                                nodeType: 'YulIdentifier',
                                                src: '2065:6:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mstore',
                                            nodeType: 'YulIdentifier',
                                            src: '2051:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '2051:21:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '2051:21:1'
                                },
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '2081:27:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'array',
                                                nodeType: 'YulIdentifier',
                                                src: '2096:5:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '2103:4:1',
                                                type: '',
                                                value: '0x20'
                                            }
                                        ],
                                        functionName: {
                                            name: 'add',
                                            nodeType: 'YulIdentifier',
                                            src: '2092:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '2092:16:1'
                                    },
                                    variables: [
                                        {
                                            name: 'dst',
                                            nodeType: 'YulTypedName',
                                            src: '2085:3:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '2146:83:1',
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: 'revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae',
                                                        nodeType: 'YulIdentifier',
                                                        src: '2148:77:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '2148:79:1'
                                                },
                                                nodeType: 'YulExpressionStatement',
                                                src: '2148:79:1'
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'src',
                                                        nodeType: 'YulIdentifier',
                                                        src: '2127:3:1'
                                                    },
                                                    {
                                                        name: 'length',
                                                        nodeType: 'YulIdentifier',
                                                        src: '2132:6:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'add',
                                                    nodeType: 'YulIdentifier',
                                                    src: '2123:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '2123:16:1'
                                            },
                                            {
                                                name: 'end',
                                                nodeType: 'YulIdentifier',
                                                src: '2141:3:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'gt',
                                            nodeType: 'YulIdentifier',
                                            src: '2120:2:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '2120:25:1'
                                    },
                                    nodeType: 'YulIf',
                                    src: '2117:112:1'
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: 'src',
                                                nodeType: 'YulIdentifier',
                                                src: '2273:3:1'
                                            },
                                            {
                                                name: 'dst',
                                                nodeType: 'YulIdentifier',
                                                src: '2278:3:1'
                                            },
                                            {
                                                name: 'length',
                                                nodeType: 'YulIdentifier',
                                                src: '2283:6:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'copy_memory_to_memory_with_cleanup',
                                            nodeType: 'YulIdentifier',
                                            src: '2238:34:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '2238:52:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '2238:52:1'
                                }
                            ]
                        },
                        name: 'abi_decode_available_length_t_string_memory_ptr_fromMemory',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'src',
                                nodeType: 'YulTypedName',
                                src: '1930:3:1',
                                type: ''
                            },
                            {
                                name: 'length',
                                nodeType: 'YulTypedName',
                                src: '1935:6:1',
                                type: ''
                            },
                            {
                                name: 'end',
                                nodeType: 'YulTypedName',
                                src: '1943:3:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'array',
                                nodeType: 'YulTypedName',
                                src: '1951:5:1',
                                type: ''
                            }
                        ],
                        src: '1862:434:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '2389:282:1',
                            statements: [
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '2438:83:1',
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: 'revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d',
                                                        nodeType: 'YulIdentifier',
                                                        src: '2440:77:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '2440:79:1'
                                                },
                                                nodeType: 'YulExpressionStatement',
                                                src: '2440:79:1'
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'offset',
                                                                nodeType: 'YulIdentifier',
                                                                src: '2417:6:1'
                                                            },
                                                            {
                                                                kind: 'number',
                                                                nodeType: 'YulLiteral',
                                                                src: '2425:4:1',
                                                                type: '',
                                                                value: '0x1f'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'add',
                                                            nodeType: 'YulIdentifier',
                                                            src: '2413:3:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '2413:17:1'
                                                    },
                                                    {
                                                        name: 'end',
                                                        nodeType: 'YulIdentifier',
                                                        src: '2432:3:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'slt',
                                                    nodeType: 'YulIdentifier',
                                                    src: '2409:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '2409:27:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'iszero',
                                            nodeType: 'YulIdentifier',
                                            src: '2402:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '2402:35:1'
                                    },
                                    nodeType: 'YulIf',
                                    src: '2399:122:1'
                                },
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '2530:27:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'offset',
                                                nodeType: 'YulIdentifier',
                                                src: '2550:6:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mload',
                                            nodeType: 'YulIdentifier',
                                            src: '2544:5:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '2544:13:1'
                                    },
                                    variables: [
                                        {
                                            name: 'length',
                                            nodeType: 'YulTypedName',
                                            src: '2534:6:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '2566:99:1',
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'offset',
                                                        nodeType: 'YulIdentifier',
                                                        src: '2638:6:1'
                                                    },
                                                    {
                                                        kind: 'number',
                                                        nodeType: 'YulLiteral',
                                                        src: '2646:4:1',
                                                        type: '',
                                                        value: '0x20'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'add',
                                                    nodeType: 'YulIdentifier',
                                                    src: '2634:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '2634:17:1'
                                            },
                                            {
                                                name: 'length',
                                                nodeType: 'YulIdentifier',
                                                src: '2653:6:1'
                                            },
                                            {
                                                name: 'end',
                                                nodeType: 'YulIdentifier',
                                                src: '2661:3:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'abi_decode_available_length_t_string_memory_ptr_fromMemory',
                                            nodeType: 'YulIdentifier',
                                            src: '2575:58:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '2575:90:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'array',
                                            nodeType: 'YulIdentifier',
                                            src: '2566:5:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'abi_decode_t_string_memory_ptr_fromMemory',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'offset',
                                nodeType: 'YulTypedName',
                                src: '2367:6:1',
                                type: ''
                            },
                            {
                                name: 'end',
                                nodeType: 'YulTypedName',
                                src: '2375:3:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'array',
                                nodeType: 'YulTypedName',
                                src: '2383:5:1',
                                type: ''
                            }
                        ],
                        src: '2316:355:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '2722:32:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '2732:16:1',
                                    value: {
                                        name: 'value',
                                        nodeType: 'YulIdentifier',
                                        src: '2743:5:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'cleaned',
                                            nodeType: 'YulIdentifier',
                                            src: '2732:7:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'cleanup_t_uint256',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '2704:5:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'cleaned',
                                nodeType: 'YulTypedName',
                                src: '2714:7:1',
                                type: ''
                            }
                        ],
                        src: '2677:77:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '2803:79:1',
                            statements: [
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '2860:16:1',
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [
                                                        {
                                                            kind: 'number',
                                                            nodeType: 'YulLiteral',
                                                            src: '2869:1:1',
                                                            type: '',
                                                            value: '0'
                                                        },
                                                        {
                                                            kind: 'number',
                                                            nodeType: 'YulLiteral',
                                                            src: '2872:1:1',
                                                            type: '',
                                                            value: '0'
                                                        }
                                                    ],
                                                    functionName: {
                                                        name: 'revert',
                                                        nodeType: 'YulIdentifier',
                                                        src: '2862:6:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '2862:12:1'
                                                },
                                                nodeType: 'YulExpressionStatement',
                                                src: '2862:12:1'
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'value',
                                                        nodeType: 'YulIdentifier',
                                                        src: '2826:5:1'
                                                    },
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'value',
                                                                nodeType: 'YulIdentifier',
                                                                src: '2851:5:1'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'cleanup_t_uint256',
                                                            nodeType: 'YulIdentifier',
                                                            src: '2833:17:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '2833:24:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'eq',
                                                    nodeType: 'YulIdentifier',
                                                    src: '2823:2:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '2823:35:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'iszero',
                                            nodeType: 'YulIdentifier',
                                            src: '2816:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '2816:43:1'
                                    },
                                    nodeType: 'YulIf',
                                    src: '2813:63:1'
                                }
                            ]
                        },
                        name: 'validator_revert_t_uint256',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '2796:5:1',
                                type: ''
                            }
                        ],
                        src: '2760:122:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '2951:80:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '2961:22:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'offset',
                                                nodeType: 'YulIdentifier',
                                                src: '2976:6:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mload',
                                            nodeType: 'YulIdentifier',
                                            src: '2970:5:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '2970:13:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'value',
                                            nodeType: 'YulIdentifier',
                                            src: '2961:5:1'
                                        }
                                    ]
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: 'value',
                                                nodeType: 'YulIdentifier',
                                                src: '3019:5:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'validator_revert_t_uint256',
                                            nodeType: 'YulIdentifier',
                                            src: '2992:26:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '2992:33:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '2992:33:1'
                                }
                            ]
                        },
                        name: 'abi_decode_t_uint256_fromMemory',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'offset',
                                nodeType: 'YulTypedName',
                                src: '2929:6:1',
                                type: ''
                            },
                            {
                                name: 'end',
                                nodeType: 'YulTypedName',
                                src: '2937:3:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '2945:5:1',
                                type: ''
                            }
                        ],
                        src: '2888:143:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '3082:81:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '3092:65:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'value',
                                                nodeType: 'YulIdentifier',
                                                src: '3107:5:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '3114:42:1',
                                                type: '',
                                                value: '0xffffffffffffffffffffffffffffffffffffffff'
                                            }
                                        ],
                                        functionName: {
                                            name: 'and',
                                            nodeType: 'YulIdentifier',
                                            src: '3103:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '3103:54:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'cleaned',
                                            nodeType: 'YulIdentifier',
                                            src: '3092:7:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'cleanup_t_uint160',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '3064:5:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'cleaned',
                                nodeType: 'YulTypedName',
                                src: '3074:7:1',
                                type: ''
                            }
                        ],
                        src: '3037:126:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '3214:51:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '3224:35:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'value',
                                                nodeType: 'YulIdentifier',
                                                src: '3253:5:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'cleanup_t_uint160',
                                            nodeType: 'YulIdentifier',
                                            src: '3235:17:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '3235:24:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'cleaned',
                                            nodeType: 'YulIdentifier',
                                            src: '3224:7:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'cleanup_t_address',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '3196:5:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'cleaned',
                                nodeType: 'YulTypedName',
                                src: '3206:7:1',
                                type: ''
                            }
                        ],
                        src: '3169:96:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '3314:79:1',
                            statements: [
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '3371:16:1',
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [
                                                        {
                                                            kind: 'number',
                                                            nodeType: 'YulLiteral',
                                                            src: '3380:1:1',
                                                            type: '',
                                                            value: '0'
                                                        },
                                                        {
                                                            kind: 'number',
                                                            nodeType: 'YulLiteral',
                                                            src: '3383:1:1',
                                                            type: '',
                                                            value: '0'
                                                        }
                                                    ],
                                                    functionName: {
                                                        name: 'revert',
                                                        nodeType: 'YulIdentifier',
                                                        src: '3373:6:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '3373:12:1'
                                                },
                                                nodeType: 'YulExpressionStatement',
                                                src: '3373:12:1'
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'value',
                                                        nodeType: 'YulIdentifier',
                                                        src: '3337:5:1'
                                                    },
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'value',
                                                                nodeType: 'YulIdentifier',
                                                                src: '3362:5:1'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'cleanup_t_address',
                                                            nodeType: 'YulIdentifier',
                                                            src: '3344:17:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '3344:24:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'eq',
                                                    nodeType: 'YulIdentifier',
                                                    src: '3334:2:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '3334:35:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'iszero',
                                            nodeType: 'YulIdentifier',
                                            src: '3327:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '3327:43:1'
                                    },
                                    nodeType: 'YulIf',
                                    src: '3324:63:1'
                                }
                            ]
                        },
                        name: 'validator_revert_t_address',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '3307:5:1',
                                type: ''
                            }
                        ],
                        src: '3271:122:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '3462:80:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '3472:22:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'offset',
                                                nodeType: 'YulIdentifier',
                                                src: '3487:6:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mload',
                                            nodeType: 'YulIdentifier',
                                            src: '3481:5:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '3481:13:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'value',
                                            nodeType: 'YulIdentifier',
                                            src: '3472:5:1'
                                        }
                                    ]
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: 'value',
                                                nodeType: 'YulIdentifier',
                                                src: '3530:5:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'validator_revert_t_address',
                                            nodeType: 'YulIdentifier',
                                            src: '3503:26:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '3503:33:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '3503:33:1'
                                }
                            ]
                        },
                        name: 'abi_decode_t_address_fromMemory',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'offset',
                                nodeType: 'YulTypedName',
                                src: '3440:6:1',
                                type: ''
                            },
                            {
                                name: 'end',
                                nodeType: 'YulTypedName',
                                src: '3448:3:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '3456:5:1',
                                type: ''
                            }
                        ],
                        src: '3399:143:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '3713:1158:1',
                            statements: [
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '3760:83:1',
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: 'revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b',
                                                        nodeType: 'YulIdentifier',
                                                        src: '3762:77:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '3762:79:1'
                                                },
                                                nodeType: 'YulExpressionStatement',
                                                src: '3762:79:1'
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'dataEnd',
                                                        nodeType: 'YulIdentifier',
                                                        src: '3734:7:1'
                                                    },
                                                    {
                                                        name: 'headStart',
                                                        nodeType: 'YulIdentifier',
                                                        src: '3743:9:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'sub',
                                                    nodeType: 'YulIdentifier',
                                                    src: '3730:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '3730:23:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '3755:3:1',
                                                type: '',
                                                value: '160'
                                            }
                                        ],
                                        functionName: {
                                            name: 'slt',
                                            nodeType: 'YulIdentifier',
                                            src: '3726:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '3726:33:1'
                                    },
                                    nodeType: 'YulIf',
                                    src: '3723:120:1'
                                },
                                {
                                    nodeType: 'YulBlock',
                                    src: '3853:291:1',
                                    statements: [
                                        {
                                            nodeType: 'YulVariableDeclaration',
                                            src: '3868:38:1',
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'headStart',
                                                                nodeType: 'YulIdentifier',
                                                                src: '3892:9:1'
                                                            },
                                                            {
                                                                kind: 'number',
                                                                nodeType: 'YulLiteral',
                                                                src: '3903:1:1',
                                                                type: '',
                                                                value: '0'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'add',
                                                            nodeType: 'YulIdentifier',
                                                            src: '3888:3:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '3888:17:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'mload',
                                                    nodeType: 'YulIdentifier',
                                                    src: '3882:5:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '3882:24:1'
                                            },
                                            variables: [
                                                {
                                                    name: 'offset',
                                                    nodeType: 'YulTypedName',
                                                    src: '3872:6:1',
                                                    type: ''
                                                }
                                            ]
                                        },
                                        {
                                            body: {
                                                nodeType: 'YulBlock',
                                                src: '3953:83:1',
                                                statements: [
                                                    {
                                                        expression: {
                                                            arguments: [],
                                                            functionName: {
                                                                name: 'revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db',
                                                                nodeType: 'YulIdentifier',
                                                                src: '3955:77:1'
                                                            },
                                                            nodeType: 'YulFunctionCall',
                                                            src: '3955:79:1'
                                                        },
                                                        nodeType: 'YulExpressionStatement',
                                                        src: '3955:79:1'
                                                    }
                                                ]
                                            },
                                            condition: {
                                                arguments: [
                                                    {
                                                        name: 'offset',
                                                        nodeType: 'YulIdentifier',
                                                        src: '3925:6:1'
                                                    },
                                                    {
                                                        kind: 'number',
                                                        nodeType: 'YulLiteral',
                                                        src: '3933:18:1',
                                                        type: '',
                                                        value: '0xffffffffffffffff'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'gt',
                                                    nodeType: 'YulIdentifier',
                                                    src: '3922:2:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '3922:30:1'
                                            },
                                            nodeType: 'YulIf',
                                            src: '3919:117:1'
                                        },
                                        {
                                            nodeType: 'YulAssignment',
                                            src: '4050:84:1',
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'headStart',
                                                                nodeType: 'YulIdentifier',
                                                                src: '4106:9:1'
                                                            },
                                                            {
                                                                name: 'offset',
                                                                nodeType: 'YulIdentifier',
                                                                src: '4117:6:1'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'add',
                                                            nodeType: 'YulIdentifier',
                                                            src: '4102:3:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '4102:22:1'
                                                    },
                                                    {
                                                        name: 'dataEnd',
                                                        nodeType: 'YulIdentifier',
                                                        src: '4126:7:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'abi_decode_t_string_memory_ptr_fromMemory',
                                                    nodeType: 'YulIdentifier',
                                                    src: '4060:41:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '4060:74:1'
                                            },
                                            variableNames: [
                                                {
                                                    name: 'value0',
                                                    nodeType: 'YulIdentifier',
                                                    src: '4050:6:1'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulBlock',
                                    src: '4154:292:1',
                                    statements: [
                                        {
                                            nodeType: 'YulVariableDeclaration',
                                            src: '4169:39:1',
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'headStart',
                                                                nodeType: 'YulIdentifier',
                                                                src: '4193:9:1'
                                                            },
                                                            {
                                                                kind: 'number',
                                                                nodeType: 'YulLiteral',
                                                                src: '4204:2:1',
                                                                type: '',
                                                                value: '32'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'add',
                                                            nodeType: 'YulIdentifier',
                                                            src: '4189:3:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '4189:18:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'mload',
                                                    nodeType: 'YulIdentifier',
                                                    src: '4183:5:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '4183:25:1'
                                            },
                                            variables: [
                                                {
                                                    name: 'offset',
                                                    nodeType: 'YulTypedName',
                                                    src: '4173:6:1',
                                                    type: ''
                                                }
                                            ]
                                        },
                                        {
                                            body: {
                                                nodeType: 'YulBlock',
                                                src: '4255:83:1',
                                                statements: [
                                                    {
                                                        expression: {
                                                            arguments: [],
                                                            functionName: {
                                                                name: 'revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db',
                                                                nodeType: 'YulIdentifier',
                                                                src: '4257:77:1'
                                                            },
                                                            nodeType: 'YulFunctionCall',
                                                            src: '4257:79:1'
                                                        },
                                                        nodeType: 'YulExpressionStatement',
                                                        src: '4257:79:1'
                                                    }
                                                ]
                                            },
                                            condition: {
                                                arguments: [
                                                    {
                                                        name: 'offset',
                                                        nodeType: 'YulIdentifier',
                                                        src: '4227:6:1'
                                                    },
                                                    {
                                                        kind: 'number',
                                                        nodeType: 'YulLiteral',
                                                        src: '4235:18:1',
                                                        type: '',
                                                        value: '0xffffffffffffffff'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'gt',
                                                    nodeType: 'YulIdentifier',
                                                    src: '4224:2:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '4224:30:1'
                                            },
                                            nodeType: 'YulIf',
                                            src: '4221:117:1'
                                        },
                                        {
                                            nodeType: 'YulAssignment',
                                            src: '4352:84:1',
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'headStart',
                                                                nodeType: 'YulIdentifier',
                                                                src: '4408:9:1'
                                                            },
                                                            {
                                                                name: 'offset',
                                                                nodeType: 'YulIdentifier',
                                                                src: '4419:6:1'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'add',
                                                            nodeType: 'YulIdentifier',
                                                            src: '4404:3:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '4404:22:1'
                                                    },
                                                    {
                                                        name: 'dataEnd',
                                                        nodeType: 'YulIdentifier',
                                                        src: '4428:7:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'abi_decode_t_string_memory_ptr_fromMemory',
                                                    nodeType: 'YulIdentifier',
                                                    src: '4362:41:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '4362:74:1'
                                            },
                                            variableNames: [
                                                {
                                                    name: 'value1',
                                                    nodeType: 'YulIdentifier',
                                                    src: '4352:6:1'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulBlock',
                                    src: '4456:129:1',
                                    statements: [
                                        {
                                            nodeType: 'YulVariableDeclaration',
                                            src: '4471:16:1',
                                            value: {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '4485:2:1',
                                                type: '',
                                                value: '64'
                                            },
                                            variables: [
                                                {
                                                    name: 'offset',
                                                    nodeType: 'YulTypedName',
                                                    src: '4475:6:1',
                                                    type: ''
                                                }
                                            ]
                                        },
                                        {
                                            nodeType: 'YulAssignment',
                                            src: '4501:74:1',
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'headStart',
                                                                nodeType: 'YulIdentifier',
                                                                src: '4547:9:1'
                                                            },
                                                            {
                                                                name: 'offset',
                                                                nodeType: 'YulIdentifier',
                                                                src: '4558:6:1'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'add',
                                                            nodeType: 'YulIdentifier',
                                                            src: '4543:3:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '4543:22:1'
                                                    },
                                                    {
                                                        name: 'dataEnd',
                                                        nodeType: 'YulIdentifier',
                                                        src: '4567:7:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'abi_decode_t_uint256_fromMemory',
                                                    nodeType: 'YulIdentifier',
                                                    src: '4511:31:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '4511:64:1'
                                            },
                                            variableNames: [
                                                {
                                                    name: 'value2',
                                                    nodeType: 'YulIdentifier',
                                                    src: '4501:6:1'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulBlock',
                                    src: '4595:129:1',
                                    statements: [
                                        {
                                            nodeType: 'YulVariableDeclaration',
                                            src: '4610:16:1',
                                            value: {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '4624:2:1',
                                                type: '',
                                                value: '96'
                                            },
                                            variables: [
                                                {
                                                    name: 'offset',
                                                    nodeType: 'YulTypedName',
                                                    src: '4614:6:1',
                                                    type: ''
                                                }
                                            ]
                                        },
                                        {
                                            nodeType: 'YulAssignment',
                                            src: '4640:74:1',
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'headStart',
                                                                nodeType: 'YulIdentifier',
                                                                src: '4686:9:1'
                                                            },
                                                            {
                                                                name: 'offset',
                                                                nodeType: 'YulIdentifier',
                                                                src: '4697:6:1'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'add',
                                                            nodeType: 'YulIdentifier',
                                                            src: '4682:3:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '4682:22:1'
                                                    },
                                                    {
                                                        name: 'dataEnd',
                                                        nodeType: 'YulIdentifier',
                                                        src: '4706:7:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'abi_decode_t_uint256_fromMemory',
                                                    nodeType: 'YulIdentifier',
                                                    src: '4650:31:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '4650:64:1'
                                            },
                                            variableNames: [
                                                {
                                                    name: 'value3',
                                                    nodeType: 'YulIdentifier',
                                                    src: '4640:6:1'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulBlock',
                                    src: '4734:130:1',
                                    statements: [
                                        {
                                            nodeType: 'YulVariableDeclaration',
                                            src: '4749:17:1',
                                            value: {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '4763:3:1',
                                                type: '',
                                                value: '128'
                                            },
                                            variables: [
                                                {
                                                    name: 'offset',
                                                    nodeType: 'YulTypedName',
                                                    src: '4753:6:1',
                                                    type: ''
                                                }
                                            ]
                                        },
                                        {
                                            nodeType: 'YulAssignment',
                                            src: '4780:74:1',
                                            value: {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'headStart',
                                                                nodeType: 'YulIdentifier',
                                                                src: '4826:9:1'
                                                            },
                                                            {
                                                                name: 'offset',
                                                                nodeType: 'YulIdentifier',
                                                                src: '4837:6:1'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'add',
                                                            nodeType: 'YulIdentifier',
                                                            src: '4822:3:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '4822:22:1'
                                                    },
                                                    {
                                                        name: 'dataEnd',
                                                        nodeType: 'YulIdentifier',
                                                        src: '4846:7:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'abi_decode_t_address_fromMemory',
                                                    nodeType: 'YulIdentifier',
                                                    src: '4790:31:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '4790:64:1'
                                            },
                                            variableNames: [
                                                {
                                                    name: 'value4',
                                                    nodeType: 'YulIdentifier',
                                                    src: '4780:6:1'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_uint256t_uint256t_address_fromMemory',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'headStart',
                                nodeType: 'YulTypedName',
                                src: '3651:9:1',
                                type: ''
                            },
                            {
                                name: 'dataEnd',
                                nodeType: 'YulTypedName',
                                src: '3662:7:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'value0',
                                nodeType: 'YulTypedName',
                                src: '3674:6:1',
                                type: ''
                            },
                            {
                                name: 'value1',
                                nodeType: 'YulTypedName',
                                src: '3682:6:1',
                                type: ''
                            },
                            {
                                name: 'value2',
                                nodeType: 'YulTypedName',
                                src: '3690:6:1',
                                type: ''
                            },
                            {
                                name: 'value3',
                                nodeType: 'YulTypedName',
                                src: '3698:6:1',
                                type: ''
                            },
                            {
                                name: 'value4',
                                nodeType: 'YulTypedName',
                                src: '3706:6:1',
                                type: ''
                            }
                        ],
                        src: '3548:1323:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '4936:40:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '4947:22:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'value',
                                                nodeType: 'YulIdentifier',
                                                src: '4963:5:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mload',
                                            nodeType: 'YulIdentifier',
                                            src: '4957:5:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '4957:12:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'length',
                                            nodeType: 'YulIdentifier',
                                            src: '4947:6:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'array_length_t_string_memory_ptr',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '4919:5:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'length',
                                nodeType: 'YulTypedName',
                                src: '4929:6:1',
                                type: ''
                            }
                        ],
                        src: '4877:99:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '5010:152:1',
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5027:1:1',
                                                type: '',
                                                value: '0'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5030:77:1',
                                                type: '',
                                                value: '35408467139433450592217433187231851964531694900788300625387963629091585785856'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mstore',
                                            nodeType: 'YulIdentifier',
                                            src: '5020:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5020:88:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '5020:88:1'
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5124:1:1',
                                                type: '',
                                                value: '4'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5127:4:1',
                                                type: '',
                                                value: '0x22'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mstore',
                                            nodeType: 'YulIdentifier',
                                            src: '5117:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5117:15:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '5117:15:1'
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5148:1:1',
                                                type: '',
                                                value: '0'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5151:4:1',
                                                type: '',
                                                value: '0x24'
                                            }
                                        ],
                                        functionName: {
                                            name: 'revert',
                                            nodeType: 'YulIdentifier',
                                            src: '5141:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5141:15:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '5141:15:1'
                                }
                            ]
                        },
                        name: 'panic_error_0x22',
                        nodeType: 'YulFunctionDefinition',
                        src: '4982:180:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '5219:269:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '5229:22:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'data',
                                                nodeType: 'YulIdentifier',
                                                src: '5243:4:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5249:1:1',
                                                type: '',
                                                value: '2'
                                            }
                                        ],
                                        functionName: {
                                            name: 'div',
                                            nodeType: 'YulIdentifier',
                                            src: '5239:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5239:12:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'length',
                                            nodeType: 'YulIdentifier',
                                            src: '5229:6:1'
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '5260:38:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'data',
                                                nodeType: 'YulIdentifier',
                                                src: '5290:4:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5296:1:1',
                                                type: '',
                                                value: '1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'and',
                                            nodeType: 'YulIdentifier',
                                            src: '5286:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5286:12:1'
                                    },
                                    variables: [
                                        {
                                            name: 'outOfPlaceEncoding',
                                            nodeType: 'YulTypedName',
                                            src: '5264:18:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '5337:51:1',
                                        statements: [
                                            {
                                                nodeType: 'YulAssignment',
                                                src: '5351:27:1',
                                                value: {
                                                    arguments: [
                                                        {
                                                            name: 'length',
                                                            nodeType: 'YulIdentifier',
                                                            src: '5365:6:1'
                                                        },
                                                        {
                                                            kind: 'number',
                                                            nodeType: 'YulLiteral',
                                                            src: '5373:4:1',
                                                            type: '',
                                                            value: '0x7f'
                                                        }
                                                    ],
                                                    functionName: {
                                                        name: 'and',
                                                        nodeType: 'YulIdentifier',
                                                        src: '5361:3:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '5361:17:1'
                                                },
                                                variableNames: [
                                                    {
                                                        name: 'length',
                                                        nodeType: 'YulIdentifier',
                                                        src: '5351:6:1'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: 'outOfPlaceEncoding',
                                                nodeType: 'YulIdentifier',
                                                src: '5317:18:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'iszero',
                                            nodeType: 'YulIdentifier',
                                            src: '5310:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5310:26:1'
                                    },
                                    nodeType: 'YulIf',
                                    src: '5307:81:1'
                                },
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '5440:42:1',
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: 'panic_error_0x22',
                                                        nodeType: 'YulIdentifier',
                                                        src: '5454:16:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '5454:18:1'
                                                },
                                                nodeType: 'YulExpressionStatement',
                                                src: '5454:18:1'
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: 'outOfPlaceEncoding',
                                                nodeType: 'YulIdentifier',
                                                src: '5404:18:1'
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        name: 'length',
                                                        nodeType: 'YulIdentifier',
                                                        src: '5427:6:1'
                                                    },
                                                    {
                                                        kind: 'number',
                                                        nodeType: 'YulLiteral',
                                                        src: '5435:2:1',
                                                        type: '',
                                                        value: '32'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'lt',
                                                    nodeType: 'YulIdentifier',
                                                    src: '5424:2:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '5424:14:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'eq',
                                            nodeType: 'YulIdentifier',
                                            src: '5401:2:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5401:38:1'
                                    },
                                    nodeType: 'YulIf',
                                    src: '5398:84:1'
                                }
                            ]
                        },
                        name: 'extract_byte_array_length',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'data',
                                nodeType: 'YulTypedName',
                                src: '5203:4:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'length',
                                nodeType: 'YulTypedName',
                                src: '5212:6:1',
                                type: ''
                            }
                        ],
                        src: '5168:320:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '5548:87:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '5558:11:1',
                                    value: {
                                        name: 'ptr',
                                        nodeType: 'YulIdentifier',
                                        src: '5566:3:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'data',
                                            nodeType: 'YulIdentifier',
                                            src: '5558:4:1'
                                        }
                                    ]
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5586:1:1',
                                                type: '',
                                                value: '0'
                                            },
                                            {
                                                name: 'ptr',
                                                nodeType: 'YulIdentifier',
                                                src: '5589:3:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mstore',
                                            nodeType: 'YulIdentifier',
                                            src: '5579:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5579:14:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '5579:14:1'
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '5602:26:1',
                                    value: {
                                        arguments: [
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5620:1:1',
                                                type: '',
                                                value: '0'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5623:4:1',
                                                type: '',
                                                value: '0x20'
                                            }
                                        ],
                                        functionName: {
                                            name: 'keccak256',
                                            nodeType: 'YulIdentifier',
                                            src: '5610:9:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5610:18:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'data',
                                            nodeType: 'YulIdentifier',
                                            src: '5602:4:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'array_dataslot_t_string_storage',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'ptr',
                                nodeType: 'YulTypedName',
                                src: '5535:3:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'data',
                                nodeType: 'YulTypedName',
                                src: '5543:4:1',
                                type: ''
                            }
                        ],
                        src: '5494:141:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '5685:49:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '5695:33:1',
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'value',
                                                        nodeType: 'YulIdentifier',
                                                        src: '5713:5:1'
                                                    },
                                                    {
                                                        kind: 'number',
                                                        nodeType: 'YulLiteral',
                                                        src: '5720:2:1',
                                                        type: '',
                                                        value: '31'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'add',
                                                    nodeType: 'YulIdentifier',
                                                    src: '5709:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '5709:14:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5725:2:1',
                                                type: '',
                                                value: '32'
                                            }
                                        ],
                                        functionName: {
                                            name: 'div',
                                            nodeType: 'YulIdentifier',
                                            src: '5705:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5705:23:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'result',
                                            nodeType: 'YulIdentifier',
                                            src: '5695:6:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'divide_by_32_ceil',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '5668:5:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'result',
                                nodeType: 'YulTypedName',
                                src: '5678:6:1',
                                type: ''
                            }
                        ],
                        src: '5641:93:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '5793:54:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '5803:37:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'bits',
                                                nodeType: 'YulIdentifier',
                                                src: '5828:4:1'
                                            },
                                            {
                                                name: 'value',
                                                nodeType: 'YulIdentifier',
                                                src: '5834:5:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'shl',
                                            nodeType: 'YulIdentifier',
                                            src: '5824:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5824:16:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'newValue',
                                            nodeType: 'YulIdentifier',
                                            src: '5803:8:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'shift_left_dynamic',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'bits',
                                nodeType: 'YulTypedName',
                                src: '5768:4:1',
                                type: ''
                            },
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '5774:5:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'newValue',
                                nodeType: 'YulTypedName',
                                src: '5784:8:1',
                                type: ''
                            }
                        ],
                        src: '5740:107:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '5929:317:1',
                            statements: [
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '5939:35:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'shiftBytes',
                                                nodeType: 'YulIdentifier',
                                                src: '5960:10:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '5972:1:1',
                                                type: '',
                                                value: '8'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mul',
                                            nodeType: 'YulIdentifier',
                                            src: '5956:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5956:18:1'
                                    },
                                    variables: [
                                        {
                                            name: 'shiftBits',
                                            nodeType: 'YulTypedName',
                                            src: '5943:9:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '5983:109:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'shiftBits',
                                                nodeType: 'YulIdentifier',
                                                src: '6014:9:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '6025:66:1',
                                                type: '',
                                                value: '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
                                            }
                                        ],
                                        functionName: {
                                            name: 'shift_left_dynamic',
                                            nodeType: 'YulIdentifier',
                                            src: '5995:18:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '5995:97:1'
                                    },
                                    variables: [
                                        {
                                            name: 'mask',
                                            nodeType: 'YulTypedName',
                                            src: '5987:4:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '6101:51:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'shiftBits',
                                                nodeType: 'YulIdentifier',
                                                src: '6132:9:1'
                                            },
                                            {
                                                name: 'toInsert',
                                                nodeType: 'YulIdentifier',
                                                src: '6143:8:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'shift_left_dynamic',
                                            nodeType: 'YulIdentifier',
                                            src: '6113:18:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '6113:39:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'toInsert',
                                            nodeType: 'YulIdentifier',
                                            src: '6101:8:1'
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '6161:30:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'value',
                                                nodeType: 'YulIdentifier',
                                                src: '6174:5:1'
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        name: 'mask',
                                                        nodeType: 'YulIdentifier',
                                                        src: '6185:4:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'not',
                                                    nodeType: 'YulIdentifier',
                                                    src: '6181:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '6181:9:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'and',
                                            nodeType: 'YulIdentifier',
                                            src: '6170:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '6170:21:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'value',
                                            nodeType: 'YulIdentifier',
                                            src: '6161:5:1'
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '6200:40:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'value',
                                                nodeType: 'YulIdentifier',
                                                src: '6213:5:1'
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        name: 'toInsert',
                                                        nodeType: 'YulIdentifier',
                                                        src: '6224:8:1'
                                                    },
                                                    {
                                                        name: 'mask',
                                                        nodeType: 'YulIdentifier',
                                                        src: '6234:4:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'and',
                                                    nodeType: 'YulIdentifier',
                                                    src: '6220:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '6220:19:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'or',
                                            nodeType: 'YulIdentifier',
                                            src: '6210:2:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '6210:30:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'result',
                                            nodeType: 'YulIdentifier',
                                            src: '6200:6:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'update_byte_slice_dynamic32',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '5890:5:1',
                                type: ''
                            },
                            {
                                name: 'shiftBytes',
                                nodeType: 'YulTypedName',
                                src: '5897:10:1',
                                type: ''
                            },
                            {
                                name: 'toInsert',
                                nodeType: 'YulTypedName',
                                src: '5909:8:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'result',
                                nodeType: 'YulTypedName',
                                src: '5922:6:1',
                                type: ''
                            }
                        ],
                        src: '5853:393:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '6284:28:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '6294:12:1',
                                    value: {
                                        name: 'value',
                                        nodeType: 'YulIdentifier',
                                        src: '6301:5:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'ret',
                                            nodeType: 'YulIdentifier',
                                            src: '6294:3:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'identity',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '6270:5:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'ret',
                                nodeType: 'YulTypedName',
                                src: '6280:3:1',
                                type: ''
                            }
                        ],
                        src: '6252:60:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '6378:82:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '6388:66:1',
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'value',
                                                                nodeType: 'YulIdentifier',
                                                                src: '6446:5:1'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'cleanup_t_uint256',
                                                            nodeType: 'YulIdentifier',
                                                            src: '6428:17:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '6428:24:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'identity',
                                                    nodeType: 'YulIdentifier',
                                                    src: '6419:8:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '6419:34:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'cleanup_t_uint256',
                                            nodeType: 'YulIdentifier',
                                            src: '6401:17:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '6401:53:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'converted',
                                            nodeType: 'YulIdentifier',
                                            src: '6388:9:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'convert_t_uint256_to_t_uint256',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '6358:5:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'converted',
                                nodeType: 'YulTypedName',
                                src: '6368:9:1',
                                type: ''
                            }
                        ],
                        src: '6318:142:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '6513:28:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '6523:12:1',
                                    value: {
                                        name: 'value',
                                        nodeType: 'YulIdentifier',
                                        src: '6530:5:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'ret',
                                            nodeType: 'YulIdentifier',
                                            src: '6523:3:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'prepare_store_t_uint256',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '6499:5:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'ret',
                                nodeType: 'YulTypedName',
                                src: '6509:3:1',
                                type: ''
                            }
                        ],
                        src: '6466:75:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '6623:193:1',
                            statements: [
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '6633:63:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'value_0',
                                                nodeType: 'YulIdentifier',
                                                src: '6688:7:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'convert_t_uint256_to_t_uint256',
                                            nodeType: 'YulIdentifier',
                                            src: '6657:30:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '6657:39:1'
                                    },
                                    variables: [
                                        {
                                            name: 'convertedValue_0',
                                            nodeType: 'YulTypedName',
                                            src: '6637:16:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: 'slot',
                                                nodeType: 'YulIdentifier',
                                                src: '6712:4:1'
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'slot',
                                                                nodeType: 'YulIdentifier',
                                                                src: '6752:4:1'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'sload',
                                                            nodeType: 'YulIdentifier',
                                                            src: '6746:5:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '6746:11:1'
                                                    },
                                                    {
                                                        name: 'offset',
                                                        nodeType: 'YulIdentifier',
                                                        src: '6759:6:1'
                                                    },
                                                    {
                                                        arguments: [
                                                            {
                                                                name: 'convertedValue_0',
                                                                nodeType: 'YulIdentifier',
                                                                src: '6791:16:1'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'prepare_store_t_uint256',
                                                            nodeType: 'YulIdentifier',
                                                            src: '6767:23:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '6767:41:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'update_byte_slice_dynamic32',
                                                    nodeType: 'YulIdentifier',
                                                    src: '6718:27:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '6718:91:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'sstore',
                                            nodeType: 'YulIdentifier',
                                            src: '6705:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '6705:105:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '6705:105:1'
                                }
                            ]
                        },
                        name: 'update_storage_value_t_uint256_to_t_uint256',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'slot',
                                nodeType: 'YulTypedName',
                                src: '6600:4:1',
                                type: ''
                            },
                            {
                                name: 'offset',
                                nodeType: 'YulTypedName',
                                src: '6606:6:1',
                                type: ''
                            },
                            {
                                name: 'value_0',
                                nodeType: 'YulTypedName',
                                src: '6614:7:1',
                                type: ''
                            }
                        ],
                        src: '6547:269:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '6871:24:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '6881:8:1',
                                    value: {
                                        kind: 'number',
                                        nodeType: 'YulLiteral',
                                        src: '6888:1:1',
                                        type: '',
                                        value: '0'
                                    },
                                    variableNames: [
                                        {
                                            name: 'ret',
                                            nodeType: 'YulIdentifier',
                                            src: '6881:3:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'zero_value_for_split_t_uint256',
                        nodeType: 'YulFunctionDefinition',
                        returnVariables: [
                            {
                                name: 'ret',
                                nodeType: 'YulTypedName',
                                src: '6867:3:1',
                                type: ''
                            }
                        ],
                        src: '6822:73:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '6954:136:1',
                            statements: [
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '6964:46:1',
                                    value: {
                                        arguments: [],
                                        functionName: {
                                            name: 'zero_value_for_split_t_uint256',
                                            nodeType: 'YulIdentifier',
                                            src: '6978:30:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '6978:32:1'
                                    },
                                    variables: [
                                        {
                                            name: 'zero_0',
                                            nodeType: 'YulTypedName',
                                            src: '6968:6:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: 'slot',
                                                nodeType: 'YulIdentifier',
                                                src: '7063:4:1'
                                            },
                                            {
                                                name: 'offset',
                                                nodeType: 'YulIdentifier',
                                                src: '7069:6:1'
                                            },
                                            {
                                                name: 'zero_0',
                                                nodeType: 'YulIdentifier',
                                                src: '7077:6:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'update_storage_value_t_uint256_to_t_uint256',
                                            nodeType: 'YulIdentifier',
                                            src: '7019:43:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '7019:65:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '7019:65:1'
                                }
                            ]
                        },
                        name: 'storage_set_to_zero_t_uint256',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'slot',
                                nodeType: 'YulTypedName',
                                src: '6940:4:1',
                                type: ''
                            },
                            {
                                name: 'offset',
                                nodeType: 'YulTypedName',
                                src: '6946:6:1',
                                type: ''
                            }
                        ],
                        src: '6901:189:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '7146:136:1',
                            statements: [
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '7213:63:1',
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [
                                                        {
                                                            name: 'start',
                                                            nodeType: 'YulIdentifier',
                                                            src: '7257:5:1'
                                                        },
                                                        {
                                                            kind: 'number',
                                                            nodeType: 'YulLiteral',
                                                            src: '7264:1:1',
                                                            type: '',
                                                            value: '0'
                                                        }
                                                    ],
                                                    functionName: {
                                                        name: 'storage_set_to_zero_t_uint256',
                                                        nodeType: 'YulIdentifier',
                                                        src: '7227:29:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '7227:39:1'
                                                },
                                                nodeType: 'YulExpressionStatement',
                                                src: '7227:39:1'
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: 'start',
                                                nodeType: 'YulIdentifier',
                                                src: '7166:5:1'
                                            },
                                            {
                                                name: 'end',
                                                nodeType: 'YulIdentifier',
                                                src: '7173:3:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'lt',
                                            nodeType: 'YulIdentifier',
                                            src: '7163:2:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '7163:14:1'
                                    },
                                    nodeType: 'YulForLoop',
                                    post: {
                                        nodeType: 'YulBlock',
                                        src: '7178:26:1',
                                        statements: [
                                            {
                                                nodeType: 'YulAssignment',
                                                src: '7180:22:1',
                                                value: {
                                                    arguments: [
                                                        {
                                                            name: 'start',
                                                            nodeType: 'YulIdentifier',
                                                            src: '7193:5:1'
                                                        },
                                                        {
                                                            kind: 'number',
                                                            nodeType: 'YulLiteral',
                                                            src: '7200:1:1',
                                                            type: '',
                                                            value: '1'
                                                        }
                                                    ],
                                                    functionName: {
                                                        name: 'add',
                                                        nodeType: 'YulIdentifier',
                                                        src: '7189:3:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '7189:13:1'
                                                },
                                                variableNames: [
                                                    {
                                                        name: 'start',
                                                        nodeType: 'YulIdentifier',
                                                        src: '7180:5:1'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    pre: {
                                        nodeType: 'YulBlock',
                                        src: '7160:2:1',
                                        statements: []
                                    },
                                    src: '7156:120:1'
                                }
                            ]
                        },
                        name: 'clear_storage_range_t_bytes1',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'start',
                                nodeType: 'YulTypedName',
                                src: '7134:5:1',
                                type: ''
                            },
                            {
                                name: 'end',
                                nodeType: 'YulTypedName',
                                src: '7141:3:1',
                                type: ''
                            }
                        ],
                        src: '7096:186:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '7367:464:1',
                            statements: [
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '7393:431:1',
                                        statements: [
                                            {
                                                nodeType: 'YulVariableDeclaration',
                                                src: '7407:54:1',
                                                value: {
                                                    arguments: [
                                                        {
                                                            name: 'array',
                                                            nodeType: 'YulIdentifier',
                                                            src: '7455:5:1'
                                                        }
                                                    ],
                                                    functionName: {
                                                        name: 'array_dataslot_t_string_storage',
                                                        nodeType: 'YulIdentifier',
                                                        src: '7423:31:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '7423:38:1'
                                                },
                                                variables: [
                                                    {
                                                        name: 'dataArea',
                                                        nodeType: 'YulTypedName',
                                                        src: '7411:8:1',
                                                        type: ''
                                                    }
                                                ]
                                            },
                                            {
                                                nodeType: 'YulVariableDeclaration',
                                                src: '7474:63:1',
                                                value: {
                                                    arguments: [
                                                        {
                                                            name: 'dataArea',
                                                            nodeType: 'YulIdentifier',
                                                            src: '7497:8:1'
                                                        },
                                                        {
                                                            arguments: [
                                                                {
                                                                    name: 'startIndex',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '7525:10:1'
                                                                }
                                                            ],
                                                            functionName: {
                                                                name: 'divide_by_32_ceil',
                                                                nodeType: 'YulIdentifier',
                                                                src: '7507:17:1'
                                                            },
                                                            nodeType: 'YulFunctionCall',
                                                            src: '7507:29:1'
                                                        }
                                                    ],
                                                    functionName: {
                                                        name: 'add',
                                                        nodeType: 'YulIdentifier',
                                                        src: '7493:3:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '7493:44:1'
                                                },
                                                variables: [
                                                    {
                                                        name: 'deleteStart',
                                                        nodeType: 'YulTypedName',
                                                        src: '7478:11:1',
                                                        type: ''
                                                    }
                                                ]
                                            },
                                            {
                                                body: {
                                                    nodeType: 'YulBlock',
                                                    src: '7694:27:1',
                                                    statements: [
                                                        {
                                                            nodeType: 'YulAssignment',
                                                            src: '7696:23:1',
                                                            value: {
                                                                name: 'dataArea',
                                                                nodeType: 'YulIdentifier',
                                                                src: '7711:8:1'
                                                            },
                                                            variableNames: [
                                                                {
                                                                    name: 'deleteStart',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '7696:11:1'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                condition: {
                                                    arguments: [
                                                        {
                                                            name: 'startIndex',
                                                            nodeType: 'YulIdentifier',
                                                            src: '7678:10:1'
                                                        },
                                                        {
                                                            kind: 'number',
                                                            nodeType: 'YulLiteral',
                                                            src: '7690:2:1',
                                                            type: '',
                                                            value: '32'
                                                        }
                                                    ],
                                                    functionName: {
                                                        name: 'lt',
                                                        nodeType: 'YulIdentifier',
                                                        src: '7675:2:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '7675:18:1'
                                                },
                                                nodeType: 'YulIf',
                                                src: '7672:49:1'
                                            },
                                            {
                                                expression: {
                                                    arguments: [
                                                        {
                                                            name: 'deleteStart',
                                                            nodeType: 'YulIdentifier',
                                                            src: '7763:11:1'
                                                        },
                                                        {
                                                            arguments: [
                                                                {
                                                                    name: 'dataArea',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '7780:8:1'
                                                                },
                                                                {
                                                                    arguments: [
                                                                        {
                                                                            name: 'len',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '7808:3:1'
                                                                        }
                                                                    ],
                                                                    functionName: {
                                                                        name: 'divide_by_32_ceil',
                                                                        nodeType: 'YulIdentifier',
                                                                        src: '7790:17:1'
                                                                    },
                                                                    nodeType: 'YulFunctionCall',
                                                                    src: '7790:22:1'
                                                                }
                                                            ],
                                                            functionName: {
                                                                name: 'add',
                                                                nodeType: 'YulIdentifier',
                                                                src: '7776:3:1'
                                                            },
                                                            nodeType: 'YulFunctionCall',
                                                            src: '7776:37:1'
                                                        }
                                                    ],
                                                    functionName: {
                                                        name: 'clear_storage_range_t_bytes1',
                                                        nodeType: 'YulIdentifier',
                                                        src: '7734:28:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '7734:80:1'
                                                },
                                                nodeType: 'YulExpressionStatement',
                                                src: '7734:80:1'
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: 'len',
                                                nodeType: 'YulIdentifier',
                                                src: '7384:3:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '7389:2:1',
                                                type: '',
                                                value: '31'
                                            }
                                        ],
                                        functionName: {
                                            name: 'gt',
                                            nodeType: 'YulIdentifier',
                                            src: '7381:2:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '7381:11:1'
                                    },
                                    nodeType: 'YulIf',
                                    src: '7378:446:1'
                                }
                            ]
                        },
                        name: 'clean_up_bytearray_end_slots_t_string_storage',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'array',
                                nodeType: 'YulTypedName',
                                src: '7343:5:1',
                                type: ''
                            },
                            {
                                name: 'len',
                                nodeType: 'YulTypedName',
                                src: '7350:3:1',
                                type: ''
                            },
                            {
                                name: 'startIndex',
                                nodeType: 'YulTypedName',
                                src: '7355:10:1',
                                type: ''
                            }
                        ],
                        src: '7288:543:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '7900:54:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '7910:37:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'bits',
                                                nodeType: 'YulIdentifier',
                                                src: '7935:4:1'
                                            },
                                            {
                                                name: 'value',
                                                nodeType: 'YulIdentifier',
                                                src: '7941:5:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'shr',
                                            nodeType: 'YulIdentifier',
                                            src: '7931:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '7931:16:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'newValue',
                                            nodeType: 'YulIdentifier',
                                            src: '7910:8:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'shift_right_unsigned_dynamic',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'bits',
                                nodeType: 'YulTypedName',
                                src: '7875:4:1',
                                type: ''
                            },
                            {
                                name: 'value',
                                nodeType: 'YulTypedName',
                                src: '7881:5:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'newValue',
                                nodeType: 'YulTypedName',
                                src: '7891:8:1',
                                type: ''
                            }
                        ],
                        src: '7837:117:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '8011:118:1',
                            statements: [
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '8021:68:1',
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        arguments: [
                                                            {
                                                                kind: 'number',
                                                                nodeType: 'YulLiteral',
                                                                src: '8070:1:1',
                                                                type: '',
                                                                value: '8'
                                                            },
                                                            {
                                                                name: 'bytes',
                                                                nodeType: 'YulIdentifier',
                                                                src: '8073:5:1'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'mul',
                                                            nodeType: 'YulIdentifier',
                                                            src: '8066:3:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '8066:13:1'
                                                    },
                                                    {
                                                        arguments: [
                                                            {
                                                                kind: 'number',
                                                                nodeType: 'YulLiteral',
                                                                src: '8085:1:1',
                                                                type: '',
                                                                value: '0'
                                                            }
                                                        ],
                                                        functionName: {
                                                            name: 'not',
                                                            nodeType: 'YulIdentifier',
                                                            src: '8081:3:1'
                                                        },
                                                        nodeType: 'YulFunctionCall',
                                                        src: '8081:6:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'shift_right_unsigned_dynamic',
                                                    nodeType: 'YulIdentifier',
                                                    src: '8037:28:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '8037:51:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'not',
                                            nodeType: 'YulIdentifier',
                                            src: '8033:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '8033:56:1'
                                    },
                                    variables: [
                                        {
                                            name: 'mask',
                                            nodeType: 'YulTypedName',
                                            src: '8025:4:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '8098:25:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'data',
                                                nodeType: 'YulIdentifier',
                                                src: '8112:4:1'
                                            },
                                            {
                                                name: 'mask',
                                                nodeType: 'YulIdentifier',
                                                src: '8118:4:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'and',
                                            nodeType: 'YulIdentifier',
                                            src: '8108:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '8108:15:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'result',
                                            nodeType: 'YulIdentifier',
                                            src: '8098:6:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'mask_bytes_dynamic',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'data',
                                nodeType: 'YulTypedName',
                                src: '7988:4:1',
                                type: ''
                            },
                            {
                                name: 'bytes',
                                nodeType: 'YulTypedName',
                                src: '7994:5:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'result',
                                nodeType: 'YulTypedName',
                                src: '8004:6:1',
                                type: ''
                            }
                        ],
                        src: '7960:169:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '8215:214:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '8348:37:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'data',
                                                nodeType: 'YulIdentifier',
                                                src: '8375:4:1'
                                            },
                                            {
                                                name: 'len',
                                                nodeType: 'YulIdentifier',
                                                src: '8381:3:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mask_bytes_dynamic',
                                            nodeType: 'YulIdentifier',
                                            src: '8356:18:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '8356:29:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'data',
                                            nodeType: 'YulIdentifier',
                                            src: '8348:4:1'
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '8394:29:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'data',
                                                nodeType: 'YulIdentifier',
                                                src: '8405:4:1'
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        kind: 'number',
                                                        nodeType: 'YulLiteral',
                                                        src: '8415:1:1',
                                                        type: '',
                                                        value: '2'
                                                    },
                                                    {
                                                        name: 'len',
                                                        nodeType: 'YulIdentifier',
                                                        src: '8418:3:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'mul',
                                                    nodeType: 'YulIdentifier',
                                                    src: '8411:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '8411:11:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'or',
                                            nodeType: 'YulIdentifier',
                                            src: '8402:2:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '8402:21:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'used',
                                            nodeType: 'YulIdentifier',
                                            src: '8394:4:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'extract_used_part_and_set_length_of_short_byte_array',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'data',
                                nodeType: 'YulTypedName',
                                src: '8196:4:1',
                                type: ''
                            },
                            {
                                name: 'len',
                                nodeType: 'YulTypedName',
                                src: '8202:3:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'used',
                                nodeType: 'YulTypedName',
                                src: '8210:4:1',
                                type: ''
                            }
                        ],
                        src: '8134:295:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '8526:1303:1',
                            statements: [
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '8537:51:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'src',
                                                nodeType: 'YulIdentifier',
                                                src: '8584:3:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'array_length_t_string_memory_ptr',
                                            nodeType: 'YulIdentifier',
                                            src: '8551:32:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '8551:37:1'
                                    },
                                    variables: [
                                        {
                                            name: 'newLen',
                                            nodeType: 'YulTypedName',
                                            src: '8541:6:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    body: {
                                        nodeType: 'YulBlock',
                                        src: '8673:22:1',
                                        statements: [
                                            {
                                                expression: {
                                                    arguments: [],
                                                    functionName: {
                                                        name: 'panic_error_0x41',
                                                        nodeType: 'YulIdentifier',
                                                        src: '8675:16:1'
                                                    },
                                                    nodeType: 'YulFunctionCall',
                                                    src: '8675:18:1'
                                                },
                                                nodeType: 'YulExpressionStatement',
                                                src: '8675:18:1'
                                            }
                                        ]
                                    },
                                    condition: {
                                        arguments: [
                                            {
                                                name: 'newLen',
                                                nodeType: 'YulIdentifier',
                                                src: '8645:6:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '8653:18:1',
                                                type: '',
                                                value: '0xffffffffffffffff'
                                            }
                                        ],
                                        functionName: {
                                            name: 'gt',
                                            nodeType: 'YulIdentifier',
                                            src: '8642:2:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '8642:30:1'
                                    },
                                    nodeType: 'YulIf',
                                    src: '8639:56:1'
                                },
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '8705:52:1',
                                    value: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'slot',
                                                        nodeType: 'YulIdentifier',
                                                        src: '8751:4:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'sload',
                                                    nodeType: 'YulIdentifier',
                                                    src: '8745:5:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '8745:11:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'extract_byte_array_length',
                                            nodeType: 'YulIdentifier',
                                            src: '8719:25:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '8719:38:1'
                                    },
                                    variables: [
                                        {
                                            name: 'oldLen',
                                            nodeType: 'YulTypedName',
                                            src: '8709:6:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: 'slot',
                                                nodeType: 'YulIdentifier',
                                                src: '8850:4:1'
                                            },
                                            {
                                                name: 'oldLen',
                                                nodeType: 'YulIdentifier',
                                                src: '8856:6:1'
                                            },
                                            {
                                                name: 'newLen',
                                                nodeType: 'YulIdentifier',
                                                src: '8864:6:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'clean_up_bytearray_end_slots_t_string_storage',
                                            nodeType: 'YulIdentifier',
                                            src: '8804:45:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '8804:67:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '8804:67:1'
                                },
                                {
                                    nodeType: 'YulVariableDeclaration',
                                    src: '8881:18:1',
                                    value: {
                                        kind: 'number',
                                        nodeType: 'YulLiteral',
                                        src: '8898:1:1',
                                        type: '',
                                        value: '0'
                                    },
                                    variables: [
                                        {
                                            name: 'srcOffset',
                                            nodeType: 'YulTypedName',
                                            src: '8885:9:1',
                                            type: ''
                                        }
                                    ]
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '8909:17:1',
                                    value: {
                                        kind: 'number',
                                        nodeType: 'YulLiteral',
                                        src: '8922:4:1',
                                        type: '',
                                        value: '0x20'
                                    },
                                    variableNames: [
                                        {
                                            name: 'srcOffset',
                                            nodeType: 'YulIdentifier',
                                            src: '8909:9:1'
                                        }
                                    ]
                                },
                                {
                                    cases: [
                                        {
                                            body: {
                                                nodeType: 'YulBlock',
                                                src: '8973:611:1',
                                                statements: [
                                                    {
                                                        nodeType: 'YulVariableDeclaration',
                                                        src: '8987:37:1',
                                                        value: {
                                                            arguments: [
                                                                {
                                                                    name: 'newLen',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '9006:6:1'
                                                                },
                                                                {
                                                                    arguments: [
                                                                        {
                                                                            kind: 'number',
                                                                            nodeType: 'YulLiteral',
                                                                            src: '9018:4:1',
                                                                            type: '',
                                                                            value: '0x1f'
                                                                        }
                                                                    ],
                                                                    functionName: {
                                                                        name: 'not',
                                                                        nodeType: 'YulIdentifier',
                                                                        src: '9014:3:1'
                                                                    },
                                                                    nodeType: 'YulFunctionCall',
                                                                    src: '9014:9:1'
                                                                }
                                                            ],
                                                            functionName: {
                                                                name: 'and',
                                                                nodeType: 'YulIdentifier',
                                                                src: '9002:3:1'
                                                            },
                                                            nodeType: 'YulFunctionCall',
                                                            src: '9002:22:1'
                                                        },
                                                        variables: [
                                                            {
                                                                name: 'loopEnd',
                                                                nodeType: 'YulTypedName',
                                                                src: '8991:7:1',
                                                                type: ''
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        nodeType: 'YulVariableDeclaration',
                                                        src: '9038:51:1',
                                                        value: {
                                                            arguments: [
                                                                {
                                                                    name: 'slot',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '9084:4:1'
                                                                }
                                                            ],
                                                            functionName: {
                                                                name: 'array_dataslot_t_string_storage',
                                                                nodeType: 'YulIdentifier',
                                                                src: '9052:31:1'
                                                            },
                                                            nodeType: 'YulFunctionCall',
                                                            src: '9052:37:1'
                                                        },
                                                        variables: [
                                                            {
                                                                name: 'dstPtr',
                                                                nodeType: 'YulTypedName',
                                                                src: '9042:6:1',
                                                                type: ''
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        nodeType: 'YulVariableDeclaration',
                                                        src: '9102:10:1',
                                                        value: {
                                                            kind: 'number',
                                                            nodeType: 'YulLiteral',
                                                            src: '9111:1:1',
                                                            type: '',
                                                            value: '0'
                                                        },
                                                        variables: [
                                                            {
                                                                name: 'i',
                                                                nodeType: 'YulTypedName',
                                                                src: '9106:1:1',
                                                                type: ''
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        body: {
                                                            nodeType: 'YulBlock',
                                                            src: '9170:163:1',
                                                            statements: [
                                                                {
                                                                    expression: {
                                                                        arguments: [
                                                                            {
                                                                                name: 'dstPtr',
                                                                                nodeType: 'YulIdentifier',
                                                                                src: '9195:6:1'
                                                                            },
                                                                            {
                                                                                arguments: [
                                                                                    {
                                                                                        arguments: [
                                                                                            {
                                                                                                name: 'src',
                                                                                                nodeType: 'YulIdentifier',
                                                                                                src: '9213:3:1'
                                                                                            },
                                                                                            {
                                                                                                name: 'srcOffset',
                                                                                                nodeType: 'YulIdentifier',
                                                                                                src: '9218:9:1'
                                                                                            }
                                                                                        ],
                                                                                        functionName: {
                                                                                            name: 'add',
                                                                                            nodeType: 'YulIdentifier',
                                                                                            src: '9209:3:1'
                                                                                        },
                                                                                        nodeType: 'YulFunctionCall',
                                                                                        src: '9209:19:1'
                                                                                    }
                                                                                ],
                                                                                functionName: {
                                                                                    name: 'mload',
                                                                                    nodeType: 'YulIdentifier',
                                                                                    src: '9203:5:1'
                                                                                },
                                                                                nodeType: 'YulFunctionCall',
                                                                                src: '9203:26:1'
                                                                            }
                                                                        ],
                                                                        functionName: {
                                                                            name: 'sstore',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9188:6:1'
                                                                        },
                                                                        nodeType: 'YulFunctionCall',
                                                                        src: '9188:42:1'
                                                                    },
                                                                    nodeType: 'YulExpressionStatement',
                                                                    src: '9188:42:1'
                                                                },
                                                                {
                                                                    nodeType: 'YulAssignment',
                                                                    src: '9247:24:1',
                                                                    value: {
                                                                        arguments: [
                                                                            {
                                                                                name: 'dstPtr',
                                                                                nodeType: 'YulIdentifier',
                                                                                src: '9261:6:1'
                                                                            },
                                                                            {
                                                                                kind: 'number',
                                                                                nodeType: 'YulLiteral',
                                                                                src: '9269:1:1',
                                                                                type: '',
                                                                                value: '1'
                                                                            }
                                                                        ],
                                                                        functionName: {
                                                                            name: 'add',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9257:3:1'
                                                                        },
                                                                        nodeType: 'YulFunctionCall',
                                                                        src: '9257:14:1'
                                                                    },
                                                                    variableNames: [
                                                                        {
                                                                            name: 'dstPtr',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9247:6:1'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    nodeType: 'YulAssignment',
                                                                    src: '9288:31:1',
                                                                    value: {
                                                                        arguments: [
                                                                            {
                                                                                name: 'srcOffset',
                                                                                nodeType: 'YulIdentifier',
                                                                                src: '9305:9:1'
                                                                            },
                                                                            {
                                                                                kind: 'number',
                                                                                nodeType: 'YulLiteral',
                                                                                src: '9316:2:1',
                                                                                type: '',
                                                                                value: '32'
                                                                            }
                                                                        ],
                                                                        functionName: {
                                                                            name: 'add',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9301:3:1'
                                                                        },
                                                                        nodeType: 'YulFunctionCall',
                                                                        src: '9301:18:1'
                                                                    },
                                                                    variableNames: [
                                                                        {
                                                                            name: 'srcOffset',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9288:9:1'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        condition: {
                                                            arguments: [
                                                                {
                                                                    name: 'i',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '9136:1:1'
                                                                },
                                                                {
                                                                    name: 'loopEnd',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '9139:7:1'
                                                                }
                                                            ],
                                                            functionName: {
                                                                name: 'lt',
                                                                nodeType: 'YulIdentifier',
                                                                src: '9133:2:1'
                                                            },
                                                            nodeType: 'YulFunctionCall',
                                                            src: '9133:14:1'
                                                        },
                                                        nodeType: 'YulForLoop',
                                                        post: {
                                                            nodeType: 'YulBlock',
                                                            src: '9148:21:1',
                                                            statements: [
                                                                {
                                                                    nodeType: 'YulAssignment',
                                                                    src: '9150:17:1',
                                                                    value: {
                                                                        arguments: [
                                                                            {
                                                                                name: 'i',
                                                                                nodeType: 'YulIdentifier',
                                                                                src: '9159:1:1'
                                                                            },
                                                                            {
                                                                                kind: 'number',
                                                                                nodeType: 'YulLiteral',
                                                                                src: '9162:4:1',
                                                                                type: '',
                                                                                value: '0x20'
                                                                            }
                                                                        ],
                                                                        functionName: {
                                                                            name: 'add',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9155:3:1'
                                                                        },
                                                                        nodeType: 'YulFunctionCall',
                                                                        src: '9155:12:1'
                                                                    },
                                                                    variableNames: [
                                                                        {
                                                                            name: 'i',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9150:1:1'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        pre: {
                                                            nodeType: 'YulBlock',
                                                            src: '9129:3:1',
                                                            statements: []
                                                        },
                                                        src: '9125:208:1'
                                                    },
                                                    {
                                                        body: {
                                                            nodeType: 'YulBlock',
                                                            src: '9369:156:1',
                                                            statements: [
                                                                {
                                                                    nodeType: 'YulVariableDeclaration',
                                                                    src: '9387:43:1',
                                                                    value: {
                                                                        arguments: [
                                                                            {
                                                                                arguments: [
                                                                                    {
                                                                                        name: 'src',
                                                                                        nodeType: 'YulIdentifier',
                                                                                        src: '9414:3:1'
                                                                                    },
                                                                                    {
                                                                                        name: 'srcOffset',
                                                                                        nodeType: 'YulIdentifier',
                                                                                        src: '9419:9:1'
                                                                                    }
                                                                                ],
                                                                                functionName: {
                                                                                    name: 'add',
                                                                                    nodeType: 'YulIdentifier',
                                                                                    src: '9410:3:1'
                                                                                },
                                                                                nodeType: 'YulFunctionCall',
                                                                                src: '9410:19:1'
                                                                            }
                                                                        ],
                                                                        functionName: {
                                                                            name: 'mload',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9404:5:1'
                                                                        },
                                                                        nodeType: 'YulFunctionCall',
                                                                        src: '9404:26:1'
                                                                    },
                                                                    variables: [
                                                                        {
                                                                            name: 'lastValue',
                                                                            nodeType: 'YulTypedName',
                                                                            src: '9391:9:1',
                                                                            type: ''
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    expression: {
                                                                        arguments: [
                                                                            {
                                                                                name: 'dstPtr',
                                                                                nodeType: 'YulIdentifier',
                                                                                src: '9454:6:1'
                                                                            },
                                                                            {
                                                                                arguments: [
                                                                                    {
                                                                                        name: 'lastValue',
                                                                                        nodeType: 'YulIdentifier',
                                                                                        src: '9481:9:1'
                                                                                    },
                                                                                    {
                                                                                        arguments: [
                                                                                            {
                                                                                                name: 'newLen',
                                                                                                nodeType: 'YulIdentifier',
                                                                                                src: '9496:6:1'
                                                                                            },
                                                                                            {
                                                                                                kind: 'number',
                                                                                                nodeType: 'YulLiteral',
                                                                                                src: '9504:4:1',
                                                                                                type: '',
                                                                                                value: '0x1f'
                                                                                            }
                                                                                        ],
                                                                                        functionName: {
                                                                                            name: 'and',
                                                                                            nodeType: 'YulIdentifier',
                                                                                            src: '9492:3:1'
                                                                                        },
                                                                                        nodeType: 'YulFunctionCall',
                                                                                        src: '9492:17:1'
                                                                                    }
                                                                                ],
                                                                                functionName: {
                                                                                    name: 'mask_bytes_dynamic',
                                                                                    nodeType: 'YulIdentifier',
                                                                                    src: '9462:18:1'
                                                                                },
                                                                                nodeType: 'YulFunctionCall',
                                                                                src: '9462:48:1'
                                                                            }
                                                                        ],
                                                                        functionName: {
                                                                            name: 'sstore',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9447:6:1'
                                                                        },
                                                                        nodeType: 'YulFunctionCall',
                                                                        src: '9447:64:1'
                                                                    },
                                                                    nodeType: 'YulExpressionStatement',
                                                                    src: '9447:64:1'
                                                                }
                                                            ]
                                                        },
                                                        condition: {
                                                            arguments: [
                                                                {
                                                                    name: 'loopEnd',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '9352:7:1'
                                                                },
                                                                {
                                                                    name: 'newLen',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '9361:6:1'
                                                                }
                                                            ],
                                                            functionName: {
                                                                name: 'lt',
                                                                nodeType: 'YulIdentifier',
                                                                src: '9349:2:1'
                                                            },
                                                            nodeType: 'YulFunctionCall',
                                                            src: '9349:19:1'
                                                        },
                                                        nodeType: 'YulIf',
                                                        src: '9346:179:1'
                                                    },
                                                    {
                                                        expression: {
                                                            arguments: [
                                                                {
                                                                    name: 'slot',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '9545:4:1'
                                                                },
                                                                {
                                                                    arguments: [
                                                                        {
                                                                            arguments: [
                                                                                {
                                                                                    name: 'newLen',
                                                                                    nodeType: 'YulIdentifier',
                                                                                    src: '9559:6:1'
                                                                                },
                                                                                {
                                                                                    kind: 'number',
                                                                                    nodeType: 'YulLiteral',
                                                                                    src: '9567:1:1',
                                                                                    type: '',
                                                                                    value: '2'
                                                                                }
                                                                            ],
                                                                            functionName: {
                                                                                name: 'mul',
                                                                                nodeType: 'YulIdentifier',
                                                                                src: '9555:3:1'
                                                                            },
                                                                            nodeType: 'YulFunctionCall',
                                                                            src: '9555:14:1'
                                                                        },
                                                                        {
                                                                            kind: 'number',
                                                                            nodeType: 'YulLiteral',
                                                                            src: '9571:1:1',
                                                                            type: '',
                                                                            value: '1'
                                                                        }
                                                                    ],
                                                                    functionName: {
                                                                        name: 'add',
                                                                        nodeType: 'YulIdentifier',
                                                                        src: '9551:3:1'
                                                                    },
                                                                    nodeType: 'YulFunctionCall',
                                                                    src: '9551:22:1'
                                                                }
                                                            ],
                                                            functionName: {
                                                                name: 'sstore',
                                                                nodeType: 'YulIdentifier',
                                                                src: '9538:6:1'
                                                            },
                                                            nodeType: 'YulFunctionCall',
                                                            src: '9538:36:1'
                                                        },
                                                        nodeType: 'YulExpressionStatement',
                                                        src: '9538:36:1'
                                                    }
                                                ]
                                            },
                                            nodeType: 'YulCase',
                                            src: '8966:618:1',
                                            value: {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '8971:1:1',
                                                type: '',
                                                value: '1'
                                            }
                                        },
                                        {
                                            body: {
                                                nodeType: 'YulBlock',
                                                src: '9601:222:1',
                                                statements: [
                                                    {
                                                        nodeType: 'YulVariableDeclaration',
                                                        src: '9615:14:1',
                                                        value: {
                                                            kind: 'number',
                                                            nodeType: 'YulLiteral',
                                                            src: '9628:1:1',
                                                            type: '',
                                                            value: '0'
                                                        },
                                                        variables: [
                                                            {
                                                                name: 'value',
                                                                nodeType: 'YulTypedName',
                                                                src: '9619:5:1',
                                                                type: ''
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        body: {
                                                            nodeType: 'YulBlock',
                                                            src: '9652:67:1',
                                                            statements: [
                                                                {
                                                                    nodeType: 'YulAssignment',
                                                                    src: '9670:35:1',
                                                                    value: {
                                                                        arguments: [
                                                                            {
                                                                                arguments: [
                                                                                    {
                                                                                        name: 'src',
                                                                                        nodeType: 'YulIdentifier',
                                                                                        src: '9689:3:1'
                                                                                    },
                                                                                    {
                                                                                        name: 'srcOffset',
                                                                                        nodeType: 'YulIdentifier',
                                                                                        src: '9694:9:1'
                                                                                    }
                                                                                ],
                                                                                functionName: {
                                                                                    name: 'add',
                                                                                    nodeType: 'YulIdentifier',
                                                                                    src: '9685:3:1'
                                                                                },
                                                                                nodeType: 'YulFunctionCall',
                                                                                src: '9685:19:1'
                                                                            }
                                                                        ],
                                                                        functionName: {
                                                                            name: 'mload',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9679:5:1'
                                                                        },
                                                                        nodeType: 'YulFunctionCall',
                                                                        src: '9679:26:1'
                                                                    },
                                                                    variableNames: [
                                                                        {
                                                                            name: 'value',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9670:5:1'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        condition: {
                                                            name: 'newLen',
                                                            nodeType: 'YulIdentifier',
                                                            src: '9645:6:1'
                                                        },
                                                        nodeType: 'YulIf',
                                                        src: '9642:77:1'
                                                    },
                                                    {
                                                        expression: {
                                                            arguments: [
                                                                {
                                                                    name: 'slot',
                                                                    nodeType: 'YulIdentifier',
                                                                    src: '9739:4:1'
                                                                },
                                                                {
                                                                    arguments: [
                                                                        {
                                                                            name: 'value',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9798:5:1'
                                                                        },
                                                                        {
                                                                            name: 'newLen',
                                                                            nodeType: 'YulIdentifier',
                                                                            src: '9805:6:1'
                                                                        }
                                                                    ],
                                                                    functionName: {
                                                                        name: 'extract_used_part_and_set_length_of_short_byte_array',
                                                                        nodeType: 'YulIdentifier',
                                                                        src: '9745:52:1'
                                                                    },
                                                                    nodeType: 'YulFunctionCall',
                                                                    src: '9745:67:1'
                                                                }
                                                            ],
                                                            functionName: {
                                                                name: 'sstore',
                                                                nodeType: 'YulIdentifier',
                                                                src: '9732:6:1'
                                                            },
                                                            nodeType: 'YulFunctionCall',
                                                            src: '9732:81:1'
                                                        },
                                                        nodeType: 'YulExpressionStatement',
                                                        src: '9732:81:1'
                                                    }
                                                ]
                                            },
                                            nodeType: 'YulCase',
                                            src: '9593:230:1',
                                            value: 'default'
                                        }
                                    ],
                                    expression: {
                                        arguments: [
                                            {
                                                name: 'newLen',
                                                nodeType: 'YulIdentifier',
                                                src: '8946:6:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '8954:2:1',
                                                type: '',
                                                value: '31'
                                            }
                                        ],
                                        functionName: {
                                            name: 'gt',
                                            nodeType: 'YulIdentifier',
                                            src: '8943:2:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '8943:14:1'
                                    },
                                    nodeType: 'YulSwitch',
                                    src: '8936:887:1'
                                }
                            ]
                        },
                        name: 'copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'slot',
                                nodeType: 'YulTypedName',
                                src: '8515:4:1',
                                type: ''
                            },
                            {
                                name: 'src',
                                nodeType: 'YulTypedName',
                                src: '8521:3:1',
                                type: ''
                            }
                        ],
                        src: '8434:1395:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '9931:73:1',
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: 'pos',
                                                nodeType: 'YulIdentifier',
                                                src: '9948:3:1'
                                            },
                                            {
                                                name: 'length',
                                                nodeType: 'YulIdentifier',
                                                src: '9953:6:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mstore',
                                            nodeType: 'YulIdentifier',
                                            src: '9941:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '9941:19:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '9941:19:1'
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '9969:29:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'pos',
                                                nodeType: 'YulIdentifier',
                                                src: '9988:3:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '9993:4:1',
                                                type: '',
                                                value: '0x20'
                                            }
                                        ],
                                        functionName: {
                                            name: 'add',
                                            nodeType: 'YulIdentifier',
                                            src: '9984:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '9984:14:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'updated_pos',
                                            nodeType: 'YulIdentifier',
                                            src: '9969:11:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'array_storeLengthForEncoding_t_string_memory_ptr_fromStack',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'pos',
                                nodeType: 'YulTypedName',
                                src: '9903:3:1',
                                type: ''
                            },
                            {
                                name: 'length',
                                nodeType: 'YulTypedName',
                                src: '9908:6:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'updated_pos',
                                nodeType: 'YulTypedName',
                                src: '9919:11:1',
                                type: ''
                            }
                        ],
                        src: '9835:169:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '10116:126:1',
                            statements: [
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'memPtr',
                                                        nodeType: 'YulIdentifier',
                                                        src: '10138:6:1'
                                                    },
                                                    {
                                                        kind: 'number',
                                                        nodeType: 'YulLiteral',
                                                        src: '10146:1:1',
                                                        type: '',
                                                        value: '0'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'add',
                                                    nodeType: 'YulIdentifier',
                                                    src: '10134:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '10134:14:1'
                                            },
                                            {
                                                hexValue: '526f79616c74792070657263656e746167652073686f756c6420626520626574',
                                                kind: 'string',
                                                nodeType: 'YulLiteral',
                                                src: '10150:34:1',
                                                type: '',
                                                value: 'Royalty percentage should be bet'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mstore',
                                            nodeType: 'YulIdentifier',
                                            src: '10127:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '10127:58:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '10127:58:1'
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'memPtr',
                                                        nodeType: 'YulIdentifier',
                                                        src: '10206:6:1'
                                                    },
                                                    {
                                                        kind: 'number',
                                                        nodeType: 'YulLiteral',
                                                        src: '10214:2:1',
                                                        type: '',
                                                        value: '32'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'add',
                                                    nodeType: 'YulIdentifier',
                                                    src: '10202:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '10202:15:1'
                                            },
                                            {
                                                hexValue: '7765656e203020616e64203130',
                                                kind: 'string',
                                                nodeType: 'YulLiteral',
                                                src: '10219:15:1',
                                                type: '',
                                                value: 'ween 0 and 10'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mstore',
                                            nodeType: 'YulIdentifier',
                                            src: '10195:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '10195:40:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '10195:40:1'
                                }
                            ]
                        },
                        name: 'store_literal_in_memory_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'memPtr',
                                nodeType: 'YulTypedName',
                                src: '10108:6:1',
                                type: ''
                            }
                        ],
                        src: '10010:232:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '10394:220:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '10404:74:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'pos',
                                                nodeType: 'YulIdentifier',
                                                src: '10470:3:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '10475:2:1',
                                                type: '',
                                                value: '45'
                                            }
                                        ],
                                        functionName: {
                                            name: 'array_storeLengthForEncoding_t_string_memory_ptr_fromStack',
                                            nodeType: 'YulIdentifier',
                                            src: '10411:58:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '10411:67:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'pos',
                                            nodeType: 'YulIdentifier',
                                            src: '10404:3:1'
                                        }
                                    ]
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                name: 'pos',
                                                nodeType: 'YulIdentifier',
                                                src: '10576:3:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'store_literal_in_memory_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb',
                                            nodeType: 'YulIdentifier',
                                            src: '10487:88:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '10487:93:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '10487:93:1'
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '10589:19:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'pos',
                                                nodeType: 'YulIdentifier',
                                                src: '10600:3:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '10605:2:1',
                                                type: '',
                                                value: '64'
                                            }
                                        ],
                                        functionName: {
                                            name: 'add',
                                            nodeType: 'YulIdentifier',
                                            src: '10596:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '10596:12:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'end',
                                            nodeType: 'YulIdentifier',
                                            src: '10589:3:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'abi_encode_t_stringliteral_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb_to_t_string_memory_ptr_fromStack',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'pos',
                                nodeType: 'YulTypedName',
                                src: '10382:3:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'end',
                                nodeType: 'YulTypedName',
                                src: '10390:3:1',
                                type: ''
                            }
                        ],
                        src: '10248:366:1'
                    },
                    {
                        body: {
                            nodeType: 'YulBlock',
                            src: '10791:248:1',
                            statements: [
                                {
                                    nodeType: 'YulAssignment',
                                    src: '10801:26:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'headStart',
                                                nodeType: 'YulIdentifier',
                                                src: '10813:9:1'
                                            },
                                            {
                                                kind: 'number',
                                                nodeType: 'YulLiteral',
                                                src: '10824:2:1',
                                                type: '',
                                                value: '32'
                                            }
                                        ],
                                        functionName: {
                                            name: 'add',
                                            nodeType: 'YulIdentifier',
                                            src: '10809:3:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '10809:18:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'tail',
                                            nodeType: 'YulIdentifier',
                                            src: '10801:4:1'
                                        }
                                    ]
                                },
                                {
                                    expression: {
                                        arguments: [
                                            {
                                                arguments: [
                                                    {
                                                        name: 'headStart',
                                                        nodeType: 'YulIdentifier',
                                                        src: '10848:9:1'
                                                    },
                                                    {
                                                        kind: 'number',
                                                        nodeType: 'YulLiteral',
                                                        src: '10859:1:1',
                                                        type: '',
                                                        value: '0'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'add',
                                                    nodeType: 'YulIdentifier',
                                                    src: '10844:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '10844:17:1'
                                            },
                                            {
                                                arguments: [
                                                    {
                                                        name: 'tail',
                                                        nodeType: 'YulIdentifier',
                                                        src: '10867:4:1'
                                                    },
                                                    {
                                                        name: 'headStart',
                                                        nodeType: 'YulIdentifier',
                                                        src: '10873:9:1'
                                                    }
                                                ],
                                                functionName: {
                                                    name: 'sub',
                                                    nodeType: 'YulIdentifier',
                                                    src: '10863:3:1'
                                                },
                                                nodeType: 'YulFunctionCall',
                                                src: '10863:20:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'mstore',
                                            nodeType: 'YulIdentifier',
                                            src: '10837:6:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '10837:47:1'
                                    },
                                    nodeType: 'YulExpressionStatement',
                                    src: '10837:47:1'
                                },
                                {
                                    nodeType: 'YulAssignment',
                                    src: '10893:139:1',
                                    value: {
                                        arguments: [
                                            {
                                                name: 'tail',
                                                nodeType: 'YulIdentifier',
                                                src: '11027:4:1'
                                            }
                                        ],
                                        functionName: {
                                            name: 'abi_encode_t_stringliteral_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb_to_t_string_memory_ptr_fromStack',
                                            nodeType: 'YulIdentifier',
                                            src: '10901:124:1'
                                        },
                                        nodeType: 'YulFunctionCall',
                                        src: '10901:131:1'
                                    },
                                    variableNames: [
                                        {
                                            name: 'tail',
                                            nodeType: 'YulIdentifier',
                                            src: '10893:4:1'
                                        }
                                    ]
                                }
                            ]
                        },
                        name: 'abi_encode_tuple_t_stringliteral_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb__to_t_string_memory_ptr__fromStack_reversed',
                        nodeType: 'YulFunctionDefinition',
                        parameters: [
                            {
                                name: 'headStart',
                                nodeType: 'YulTypedName',
                                src: '10771:9:1',
                                type: ''
                            }
                        ],
                        returnVariables: [
                            {
                                name: 'tail',
                                nodeType: 'YulTypedName',
                                src: '10786:4:1',
                                type: ''
                            }
                        ],
                        src: '10620:419:1'
                    }
                ]
            },
            contents:
                '{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr_fromMemory(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_memory_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_uint256t_uint256t_address_fromMemory(headStart, dataEnd) -> value0, value1, value2, value3, value4 {\n        if slt(sub(dataEnd, headStart), 160) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := mload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 96\n\n            value3 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 128\n\n            value4 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb(memPtr) {\n\n        mstore(add(memPtr, 0), "Royalty percentage should be bet")\n\n        mstore(add(memPtr, 32), "ween 0 and 10")\n\n    }\n\n    function abi_encode_t_stringliteral_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 45)\n        store_literal_in_memory_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_061866c154776d214f714ca9fd4a27c416619cd99e7c91c471eb2e4db3727bfb_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n',
            id: 1,
            language: 'Yul',
            name: '#utility.yul'
        }
    ],
    linkReferences: {},
    object: '60806040523480156200001157600080fd5b50604051620047df380380620047df833981810160405281019062000037919062000470565b848481600090816200004a919062000777565b5080600190816200005c919062000777565b5050506200007f620000736200016f60201b60201c565b6200017760201b60201c565b60008210158015620000925750600a8211155b620000d4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000cb90620008e5565b60405180910390fd5b8260098190555033600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600d8190555080600f60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505062000907565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002a6826200025b565b810181811067ffffffffffffffff82111715620002c857620002c76200026c565b5b80604052505050565b6000620002dd6200023d565b9050620002eb82826200029b565b919050565b600067ffffffffffffffff8211156200030e576200030d6200026c565b5b62000319826200025b565b9050602081019050919050565b60005b838110156200034657808201518184015260208101905062000329565b60008484015250505050565b6000620003696200036384620002f0565b620002d1565b90508281526020810184848401111562000388576200038762000256565b5b6200039584828562000326565b509392505050565b600082601f830112620003b557620003b462000251565b5b8151620003c784826020860162000352565b91505092915050565b6000819050919050565b620003e581620003d0565b8114620003f157600080fd5b50565b6000815190506200040581620003da565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000438826200040b565b9050919050565b6200044a816200042b565b81146200045657600080fd5b50565b6000815190506200046a816200043f565b92915050565b600080600080600060a086880312156200048f576200048e62000247565b5b600086015167ffffffffffffffff811115620004b057620004af6200024c565b5b620004be888289016200039d565b955050602086015167ffffffffffffffff811115620004e257620004e16200024c565b5b620004f0888289016200039d565b94505060406200050388828901620003f4565b93505060606200051688828901620003f4565b9250506080620005298882890162000459565b9150509295509295909350565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200058957607f821691505b6020821081036200059f576200059e62000541565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006097fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620005ca565b620006158683620005ca565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000658620006526200064c84620003d0565b6200062d565b620003d0565b9050919050565b6000819050919050565b620006748362000637565b6200068c62000683826200065f565b848454620005d7565b825550505050565b600090565b620006a362000694565b620006b081848462000669565b505050565b5b81811015620006d857620006cc60008262000699565b600181019050620006b6565b5050565b601f8211156200072757620006f181620005a5565b620006fc84620005ba565b810160208510156200070c578190505b620007246200071b85620005ba565b830182620006b5565b50505b505050565b600082821c905092915050565b60006200074c600019846008026200072c565b1980831691505092915050565b600062000767838362000739565b9150826002028217905092915050565b620007828262000536565b67ffffffffffffffff8111156200079e576200079d6200026c565b5b620007aa825462000570565b620007b7828285620006dc565b600060209050601f831160018114620007ef5760008415620007da578287015190505b620007e6858262000759565b86555062000856565b601f198416620007ff86620005a5565b60005b82811015620008295784890151825560018201915060208501945060208101905062000802565b8683101562000849578489015162000845601f89168262000739565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f526f79616c74792070657263656e746167652073686f756c642062652062657460008201527f7765656e203020616e6420313000000000000000000000000000000000000000602082015250565b6000620008cd602d836200085e565b9150620008da826200086f565b604082019050919050565b600060208201905081810360008301526200090081620008be565b9050919050565b613ec880620009176000396000f3fe6080604052600436106101c25760003560e01c80638da5cb5b116100f7578063b88d4fde11610095578063dba417fb11610064578063dba417fb14610634578063e985e9c51461065f578063f2fde38b1461069c578063f7ea7a3d146106c5576101c2565b8063b88d4fde14610587578063c87b56dd146105b0578063cfc86f7b146105ed578063d0def52114610618576101c2565b80639fbc8713116100d15780639fbc8713146104df578063a0bcfc7f1461050a578063a22cb46514610533578063a4fefad61461055c576101c2565b80638da5cb5b146104605780638dc251e31461048b57806395d89b41146104b4576101c2565b806342842e0e1161016457806370a082311161013e57806370a08231146103b6578063715018a6146103f3578063771282f61461040a5780638a71bb2d14610435576101c2565b806342842e0e1461032757806361ba27da146103505780636352211e14610379576101c2565b8063095ea7b3116101a0578063095ea7b31461026c57806322f4596f1461029557806323b872dd146102c05780632a55205a146102e9576101c2565b806301ffc9a7146101c757806306fdde0314610204578063081812fc1461022f575b600080fd5b3480156101d357600080fd5b506101ee60048036038101906101e991906126b5565b6106ee565b6040516101fb91906126fd565b60405180910390f35b34801561021057600080fd5b50610219610700565b60405161022691906127a8565b60405180910390f35b34801561023b57600080fd5b5061025660048036038101906102519190612800565b610792565b604051610263919061286e565b60405180910390f35b34801561027857600080fd5b50610293600480360381019061028e91906128b5565b6107d8565b005b3480156102a157600080fd5b506102aa6108ef565b6040516102b79190612904565b60405180910390f35b3480156102cc57600080fd5b506102e760048036038101906102e2919061291f565b6108f5565b005b3480156102f557600080fd5b50610310600480360381019061030b9190612972565b610955565b60405161031e9291906129b2565b60405180910390f35b34801561033357600080fd5b5061034e6004803603810190610349919061291f565b610997565b005b34801561035c57600080fd5b5061037760048036038101906103729190612800565b6109b7565b005b34801561038557600080fd5b506103a0600480360381019061039b9190612800565b610a51565b6040516103ad919061286e565b60405180910390f35b3480156103c257600080fd5b506103dd60048036038101906103d891906129db565b610ad7565b6040516103ea9190612904565b60405180910390f35b3480156103ff57600080fd5b50610408610b8e565b005b34801561041657600080fd5b5061041f610ba2565b60405161042c9190612904565b60405180910390f35b34801561044157600080fd5b5061044a610bb3565b6040516104579190612904565b60405180910390f35b34801561046c57600080fd5b50610475610bb9565b604051610482919061286e565b60405180910390f35b34801561049757600080fd5b506104b260048036038101906104ad9190612a46565b610be3565b005b3480156104c057600080fd5b506104c9610c72565b6040516104d691906127a8565b60405180910390f35b3480156104eb57600080fd5b506104f4610d04565b6040516105019190612a82565b60405180910390f35b34801561051657600080fd5b50610531600480360381019061052c9190612bd2565b610d2a565b005b34801561053f57600080fd5b5061055a60048036038101906105559190612c47565b610d45565b005b34801561056857600080fd5b50610571610d5b565b60405161057e9190612904565b60405180910390f35b34801561059357600080fd5b506105ae60048036038101906105a99190612d28565b610d61565b005b3480156105bc57600080fd5b506105d760048036038101906105d29190612800565b610dc3565b6040516105e491906127a8565b60405180910390f35b3480156105f957600080fd5b50610602610dd5565b60405161060f91906127a8565b60405180910390f35b610632600480360381019061062d9190612dab565b610e63565b005b34801561064057600080fd5b506106496110bc565b6040516106569190612e66565b60405180910390f35b34801561066b57600080fd5b5061068660048036038101906106819190612e81565b6110e2565b60405161069391906126fd565b60405180910390f35b3480156106a857600080fd5b506106c360048036038101906106be91906129db565b611176565b005b3480156106d157600080fd5b506106ec60048036038101906106e79190612800565b6111f9565b005b60006106f982611292565b9050919050565b60606000805461070f90612ef0565b80601f016020809104026020016040519081016040528092919081815260200182805461073b90612ef0565b80156107885780601f1061075d57610100808354040283529160200191610788565b820191906000526020600020905b81548152906001019060200180831161076b57829003601f168201915b5050505050905090565b600061079d826112f3565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006107e382610a51565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610853576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084a90612f93565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661087261133e565b73ffffffffffffffffffffffffffffffffffffffff1614806108a157506108a08161089b61133e565b6110e2565b5b6108e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d790613025565b60405180910390fd5b6108ea8383611346565b505050565b60095481565b61090661090061133e565b826113ff565b610945576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093c906130b7565b60405180910390fd5b610950838383611494565b505050565b60008061096184610a51565b6064600e600087815260200190815260200160002054856109829190613106565b61098c9190613177565b915091509250929050565b6109b283838360405180602001604052806000815250610d61565b505050565b6109bf61178d565b600081101580156109d15750600a8111155b610a10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a079061321a565b60405180910390fd5b80600d819055507f97fee33738c3b9707c632b2981166ebdf0c1a6504b34ce6878aef1cd6cecef0381604051610a469190612904565b60405180910390a150565b600080610a5d8361180b565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ace576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac590613286565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3e90613318565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610b9661178d565b610ba06000611848565b565b6000610bae600861190e565b905090565b600d5481565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610beb61178d565b80600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167f1b7503b18e6e011fd6a493067321794279eb00b8bad2baefa1d771b2e98f216c60405160405180910390a250565b606060018054610c8190612ef0565b80601f0160208091040260200160405190810160405280929190818152602001828054610cad90612ef0565b8015610cfa5780601f10610ccf57610100808354040283529160200191610cfa565b820191906000526020600020905b815481529060010190602001808311610cdd57829003601f168201915b5050505050905090565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610d3261178d565b80600b9081610d4191906134da565b5050565b610d57610d5061133e565b838361191c565b5050565b600a5481565b610d72610d6c61133e565b836113ff565b610db1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da8906130b7565b60405180910390fd5b610dbd84848484611a88565b50505050565b6060610dce82611ae4565b9050919050565b600b8054610de290612ef0565b80601f0160208091040260200160405190810160405280929190818152602001828054610e0e90612ef0565b8015610e5b5780601f10610e3057610100808354040283529160200191610e5b565b820191906000526020600020905b815481529060010190602001808311610e3e57829003601f168201915b505050505081565b610e6b61178d565b600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636817c76c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ed8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efc91906135c1565b341015610f3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f359061363a565b60405180910390fd5b60003414611016576000600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1634604051610f8e9061368b565b60006040518083038185875af1925050503d8060008114610fcb576040519150601f19603f3d011682016040523d82523d6000602084013e610fd0565b606091505b5050905080611014576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100b906136ec565b60405180910390fd5b505b6000600954111561106f5760095461102e600861190e565b1061106e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106590613758565b60405180910390fd5b5b6110796008611bf6565b6000611085600861190e565b90506110918382611c0c565b61109b8183611c2a565b6110a781600d54611cce565b6110b1600861190e565b600a81905550505050565b600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61117e61178d565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036111ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e4906137ea565b60405180910390fd5b6111f681611848565b50565b61120161178d565b60008114806112125750600a548110155b611251576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112489061387c565b60405180910390fd5b806009819055507fc80ea35a3f9016535e5b7c87746740c5045afe42188d02c5786eb97495c2f429816040516112879190612904565b60405180910390a150565b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806112ec57506112eb82611d73565b5b9050919050565b6112fc81611e55565b61133b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133290613286565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166113b983610a51565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061140b83610a51565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061144d575061144c81856110e2565b5b8061148b57508373ffffffffffffffffffffffffffffffffffffffff1661147384610792565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166114b482610a51565b73ffffffffffffffffffffffffffffffffffffffff161461150a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115019061390e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611579576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611570906139a0565b60405180910390fd5b6115868383836001611e96565b8273ffffffffffffffffffffffffffffffffffffffff166115a682610a51565b73ffffffffffffffffffffffffffffffffffffffff16146115fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115f39061390e565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46117888383836001611e9c565b505050565b61179561133e565b73ffffffffffffffffffffffffffffffffffffffff166117b3610bb9565b73ffffffffffffffffffffffffffffffffffffffff1614611809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161180090613a0c565b60405180910390fd5b565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081600001549050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361198a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198190613a78565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611a7b91906126fd565b60405180910390a3505050565b611a93848484611494565b611a9f84848484611ea2565b611ade576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ad590613b0a565b60405180910390fd5b50505050565b6060611aef826112f3565b6000600660008481526020019081526020016000208054611b0f90612ef0565b80601f0160208091040260200160405190810160405280929190818152602001828054611b3b90612ef0565b8015611b885780601f10611b5d57610100808354040283529160200191611b88565b820191906000526020600020905b815481529060010190602001808311611b6b57829003601f168201915b505050505090506000611b99612029565b90506000815103611bae578192505050611bf1565b600082511115611be3578082604051602001611bcb929190613b66565b60405160208183030381529060405292505050611bf1565b611bec846120bb565b925050505b919050565b6001816000016000828254019250508190555050565b611c26828260405180602001604052806000815250612123565b5050565b611c3382611e55565b611c72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6990613bfc565b60405180910390fd5b80600660008481526020019081526020016000209081611c9291906134da565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce782604051611cc29190612904565b60405180910390a15050565b611cdf611cd961133e565b836113ff565b611d1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d1590613c8e565b60405180910390fd5b80600e6000848152602001908152602001600020819055507f84015e3d2316d77944b5f67d4f1b13a70233c30a9f6afbe51eed064fbd9e2b228282604051611d67929190613cae565b60405180910390a15050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611e3e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611e4e5750611e4d8261217e565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16611e778361180b565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b6000611ec38473ffffffffffffffffffffffffffffffffffffffff166121e8565b1561201c578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611eec61133e565b8786866040518563ffffffff1660e01b8152600401611f0e9493929190613d2c565b6020604051808303816000875af1925050508015611f4a57506040513d601f19601f82011682018060405250810190611f479190613d8d565b60015b611fcc573d8060008114611f7a576040519150601f19603f3d011682016040523d82523d6000602084013e611f7f565b606091505b506000815103611fc4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fbb90613b0a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050612021565b600190505b949350505050565b6060600b805461203890612ef0565b80601f016020809104026020016040519081016040528092919081815260200182805461206490612ef0565b80156120b15780601f10612086576101008083540402835291602001916120b1565b820191906000526020600020905b81548152906001019060200180831161209457829003601f168201915b5050505050905090565b60606120c6826112f3565b60006120d0612029565b905060008151116120f0576040518060200160405280600081525061211b565b806120fa8461220b565b60405160200161210b929190613b66565b6040516020818303038152906040525b915050919050565b61212d83836122d9565b61213a6000848484611ea2565b612179576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161217090613b0a565b60405180910390fd5b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60606000600161221a846124f6565b01905060008167ffffffffffffffff81111561223957612238612aa7565b5b6040519080825280601f01601f19166020018201604052801561226b5781602001600182028036833780820191505090505b509050600082602001820190505b6001156122ce578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816122c2576122c1613148565b5b04945060008503612279575b819350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612348576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161233f90613e06565b60405180910390fd5b61235181611e55565b15612391576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161238890613e72565b60405180910390fd5b61239f600083836001611e96565b6123a881611e55565b156123e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123df90613e72565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46124f2600083836001611e9c565b5050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612554577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161254a57612549613148565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612591576d04ee2d6d415b85acef8100000000838161258757612586613148565b5b0492506020810190505b662386f26fc1000083106125c057662386f26fc1000083816125b6576125b5613148565b5b0492506010810190505b6305f5e10083106125e9576305f5e10083816125df576125de613148565b5b0492506008810190505b612710831061260e57612710838161260457612603613148565b5b0492506004810190505b60648310612631576064838161262757612626613148565b5b0492506002810190505b600a8310612640576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6126928161265d565b811461269d57600080fd5b50565b6000813590506126af81612689565b92915050565b6000602082840312156126cb576126ca612653565b5b60006126d9848285016126a0565b91505092915050565b60008115159050919050565b6126f7816126e2565b82525050565b600060208201905061271260008301846126ee565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612752578082015181840152602081019050612737565b60008484015250505050565b6000601f19601f8301169050919050565b600061277a82612718565b6127848185612723565b9350612794818560208601612734565b61279d8161275e565b840191505092915050565b600060208201905081810360008301526127c2818461276f565b905092915050565b6000819050919050565b6127dd816127ca565b81146127e857600080fd5b50565b6000813590506127fa816127d4565b92915050565b60006020828403121561281657612815612653565b5b6000612824848285016127eb565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006128588261282d565b9050919050565b6128688161284d565b82525050565b6000602082019050612883600083018461285f565b92915050565b6128928161284d565b811461289d57600080fd5b50565b6000813590506128af81612889565b92915050565b600080604083850312156128cc576128cb612653565b5b60006128da858286016128a0565b92505060206128eb858286016127eb565b9150509250929050565b6128fe816127ca565b82525050565b600060208201905061291960008301846128f5565b92915050565b60008060006060848603121561293857612937612653565b5b6000612946868287016128a0565b9350506020612957868287016128a0565b9250506040612968868287016127eb565b9150509250925092565b6000806040838503121561298957612988612653565b5b6000612997858286016127eb565b92505060206129a8858286016127eb565b9150509250929050565b60006040820190506129c7600083018561285f565b6129d460208301846128f5565b9392505050565b6000602082840312156129f1576129f0612653565b5b60006129ff848285016128a0565b91505092915050565b6000612a138261282d565b9050919050565b612a2381612a08565b8114612a2e57600080fd5b50565b600081359050612a4081612a1a565b92915050565b600060208284031215612a5c57612a5b612653565b5b6000612a6a84828501612a31565b91505092915050565b612a7c81612a08565b82525050565b6000602082019050612a976000830184612a73565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612adf8261275e565b810181811067ffffffffffffffff82111715612afe57612afd612aa7565b5b80604052505050565b6000612b11612649565b9050612b1d8282612ad6565b919050565b600067ffffffffffffffff821115612b3d57612b3c612aa7565b5b612b468261275e565b9050602081019050919050565b82818337600083830152505050565b6000612b75612b7084612b22565b612b07565b905082815260208101848484011115612b9157612b90612aa2565b5b612b9c848285612b53565b509392505050565b600082601f830112612bb957612bb8612a9d565b5b8135612bc9848260208601612b62565b91505092915050565b600060208284031215612be857612be7612653565b5b600082013567ffffffffffffffff811115612c0657612c05612658565b5b612c1284828501612ba4565b91505092915050565b612c24816126e2565b8114612c2f57600080fd5b50565b600081359050612c4181612c1b565b92915050565b60008060408385031215612c5e57612c5d612653565b5b6000612c6c858286016128a0565b9250506020612c7d85828601612c32565b9150509250929050565b600067ffffffffffffffff821115612ca257612ca1612aa7565b5b612cab8261275e565b9050602081019050919050565b6000612ccb612cc684612c87565b612b07565b905082815260208101848484011115612ce757612ce6612aa2565b5b612cf2848285612b53565b509392505050565b600082601f830112612d0f57612d0e612a9d565b5b8135612d1f848260208601612cb8565b91505092915050565b60008060008060808587031215612d4257612d41612653565b5b6000612d50878288016128a0565b9450506020612d61878288016128a0565b9350506040612d72878288016127eb565b925050606085013567ffffffffffffffff811115612d9357612d92612658565b5b612d9f87828801612cfa565b91505092959194509250565b60008060408385031215612dc257612dc1612653565b5b6000612dd0858286016128a0565b925050602083013567ffffffffffffffff811115612df157612df0612658565b5b612dfd85828601612ba4565b9150509250929050565b6000819050919050565b6000612e2c612e27612e228461282d565b612e07565b61282d565b9050919050565b6000612e3e82612e11565b9050919050565b6000612e5082612e33565b9050919050565b612e6081612e45565b82525050565b6000602082019050612e7b6000830184612e57565b92915050565b60008060408385031215612e9857612e97612653565b5b6000612ea6858286016128a0565b9250506020612eb7858286016128a0565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612f0857607f821691505b602082108103612f1b57612f1a612ec1565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612f7d602183612723565b9150612f8882612f21565b604082019050919050565b60006020820190508181036000830152612fac81612f70565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b600061300f603d83612723565b915061301a82612fb3565b604082019050919050565b6000602082019050818103600083015261303e81613002565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b60006130a1602d83612723565b91506130ac82613045565b604082019050919050565b600060208201905081810360008301526130d081613094565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613111826127ca565b915061311c836127ca565b925082820261312a816127ca565b91508282048414831517613141576131406130d7565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613182826127ca565b915061318d836127ca565b92508261319d5761319c613148565b5b828204905092915050565b7f526f79616c74792070657263656e746167652073686f756c642062652062657460008201527f7765656e203020616e6420313000000000000000000000000000000000000000602082015250565b6000613204602d83612723565b915061320f826131a8565b604082019050919050565b60006020820190508181036000830152613233816131f7565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000613270601883612723565b915061327b8261323a565b602082019050919050565b6000602082019050818103600083015261329f81613263565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000613302602983612723565b915061330d826132a6565b604082019050919050565b60006020820190508181036000830152613331816132f5565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261339a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261335d565b6133a4868361335d565b95508019841693508086168417925050509392505050565b60006133d76133d26133cd846127ca565b612e07565b6127ca565b9050919050565b6000819050919050565b6133f1836133bc565b6134056133fd826133de565b84845461336a565b825550505050565b600090565b61341a61340d565b6134258184846133e8565b505050565b5b818110156134495761343e600082613412565b60018101905061342b565b5050565b601f82111561348e5761345f81613338565b6134688461334d565b81016020851015613477578190505b61348b6134838561334d565b83018261342a565b50505b505050565b600082821c905092915050565b60006134b160001984600802613493565b1980831691505092915050565b60006134ca83836134a0565b9150826002028217905092915050565b6134e382612718565b67ffffffffffffffff8111156134fc576134fb612aa7565b5b6135068254612ef0565b61351182828561344d565b600060209050601f8311600181146135445760008415613532578287015190505b61353c85826134be565b8655506135a4565b601f19841661355286613338565b60005b8281101561357a57848901518255600182019150602085019450602081019050613555565b868310156135975784890151613593601f8916826134a0565b8355505b6001600288020188555050505b505050505050565b6000815190506135bb816127d4565b92915050565b6000602082840312156135d7576135d6612653565b5b60006135e5848285016135ac565b91505092915050565b7f4e6f7420656e6f7567682066756e642073656e742e0000000000000000000000600082015250565b6000613624601583612723565b915061362f826135ee565b602082019050919050565b6000602082019050818103600083015261365381613617565b9050919050565b600081905092915050565b50565b600061367560008361365a565b915061368082613665565b600082019050919050565b600061369682613668565b9150819050919050565b7f436f756c64206e6f74207472616e73666572207468652066756e640000000000600082015250565b60006136d6601b83612723565b91506136e1826136a0565b602082019050919050565b60006020820190508181036000830152613705816136c9565b9050919050565b7f4d617820737570706c7920726561636865640000000000000000000000000000600082015250565b6000613742601283612723565b915061374d8261370c565b602082019050919050565b6000602082019050818103600083015261377181613735565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006137d4602683612723565b91506137df82613778565b604082019050919050565b60006020820190508181036000830152613803816137c7565b9050919050565b7f546f74616c20737570706c792073686f756c64206e6f74206265206c6573732060008201527f7468616e207468652063757272656e7420737570706c79000000000000000000602082015250565b6000613866603783612723565b91506138718261380a565b604082019050919050565b6000602082019050818103600083015261389581613859565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006138f8602583612723565b91506139038261389c565b604082019050919050565b60006020820190508181036000830152613927816138eb565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061398a602483612723565b91506139958261392e565b604082019050919050565b600060208201905081810360008301526139b98161397d565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006139f6602083612723565b9150613a01826139c0565b602082019050919050565b60006020820190508181036000830152613a25816139e9565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000613a62601983612723565b9150613a6d82613a2c565b602082019050919050565b60006020820190508181036000830152613a9181613a55565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613af4603283612723565b9150613aff82613a98565b604082019050919050565b60006020820190508181036000830152613b2381613ae7565b9050919050565b600081905092915050565b6000613b4082612718565b613b4a8185613b2a565b9350613b5a818560208601612734565b80840191505092915050565b6000613b728285613b35565b9150613b7e8284613b35565b91508190509392505050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000613be6602e83612723565b9150613bf182613b8a565b604082019050919050565b60006020820190508181036000830152613c1581613bd9565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f74206f776e6572206e6f722060008201527f617070726f766564000000000000000000000000000000000000000000000000602082015250565b6000613c78602883612723565b9150613c8382613c1c565b604082019050919050565b60006020820190508181036000830152613ca781613c6b565b9050919050565b6000604082019050613cc360008301856128f5565b613cd060208301846128f5565b9392505050565b600081519050919050565b600082825260208201905092915050565b6000613cfe82613cd7565b613d088185613ce2565b9350613d18818560208601612734565b613d218161275e565b840191505092915050565b6000608082019050613d41600083018761285f565b613d4e602083018661285f565b613d5b60408301856128f5565b8181036060830152613d6d8184613cf3565b905095945050505050565b600081519050613d8781612689565b92915050565b600060208284031215613da357613da2612653565b5b6000613db184828501613d78565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613df0602083612723565b9150613dfb82613dba565b602082019050919050565b60006020820190508181036000830152613e1f81613de3565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000613e5c601c83612723565b9150613e6782613e26565b602082019050919050565b60006020820190508181036000830152613e8b81613e4f565b905091905056fea2646970667358221220bc395f7c42bee1de0d7bfbd0829f9169ab2b2f61efca713c9786706ad691b9f564736f6c63430008120033',
    opcodes:
        'PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x47DF CODESIZE SUB DUP1 PUSH3 0x47DF DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0x470 JUMP JUMPDEST DUP5 DUP5 DUP2 PUSH1 0x0 SWAP1 DUP2 PUSH3 0x4A SWAP2 SWAP1 PUSH3 0x777 JUMP JUMPDEST POP DUP1 PUSH1 0x1 SWAP1 DUP2 PUSH3 0x5C SWAP2 SWAP1 PUSH3 0x777 JUMP JUMPDEST POP POP POP PUSH3 0x7F PUSH3 0x73 PUSH3 0x16F PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH3 0x177 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH1 0x0 DUP3 LT ISZERO DUP1 ISZERO PUSH3 0x92 JUMPI POP PUSH1 0xA DUP3 GT ISZERO JUMPDEST PUSH3 0xD4 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH3 0xCB SWAP1 PUSH3 0x8E5 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP3 PUSH1 0x9 DUP2 SWAP1 SSTORE POP CALLER PUSH1 0xC PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH1 0xD DUP2 SWAP1 SSTORE POP DUP1 PUSH1 0xF PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP POP POP POP POP POP PUSH3 0x907 JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x7 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x7 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH3 0x2A6 DUP3 PUSH3 0x25B JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH3 0x2C8 JUMPI PUSH3 0x2C7 PUSH3 0x26C JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x2DD PUSH3 0x23D JUMP JUMPDEST SWAP1 POP PUSH3 0x2EB DUP3 DUP3 PUSH3 0x29B JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH3 0x30E JUMPI PUSH3 0x30D PUSH3 0x26C JUMP JUMPDEST JUMPDEST PUSH3 0x319 DUP3 PUSH3 0x25B JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x346 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x329 JUMP JUMPDEST PUSH1 0x0 DUP5 DUP5 ADD MSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x369 PUSH3 0x363 DUP5 PUSH3 0x2F0 JUMP JUMPDEST PUSH3 0x2D1 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH3 0x388 JUMPI PUSH3 0x387 PUSH3 0x256 JUMP JUMPDEST JUMPDEST PUSH3 0x395 DUP5 DUP3 DUP6 PUSH3 0x326 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x3B5 JUMPI PUSH3 0x3B4 PUSH3 0x251 JUMP JUMPDEST JUMPDEST DUP2 MLOAD PUSH3 0x3C7 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH3 0x352 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x3E5 DUP2 PUSH3 0x3D0 JUMP JUMPDEST DUP2 EQ PUSH3 0x3F1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x405 DUP2 PUSH3 0x3DA JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x438 DUP3 PUSH3 0x40B JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x44A DUP2 PUSH3 0x42B JUMP JUMPDEST DUP2 EQ PUSH3 0x456 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x46A DUP2 PUSH3 0x43F JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0xA0 DUP7 DUP9 SUB SLT ISZERO PUSH3 0x48F JUMPI PUSH3 0x48E PUSH3 0x247 JUMP JUMPDEST JUMPDEST PUSH1 0x0 DUP7 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x4B0 JUMPI PUSH3 0x4AF PUSH3 0x24C JUMP JUMPDEST JUMPDEST PUSH3 0x4BE DUP9 DUP3 DUP10 ADD PUSH3 0x39D JUMP JUMPDEST SWAP6 POP POP PUSH1 0x20 DUP7 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x4E2 JUMPI PUSH3 0x4E1 PUSH3 0x24C JUMP JUMPDEST JUMPDEST PUSH3 0x4F0 DUP9 DUP3 DUP10 ADD PUSH3 0x39D JUMP JUMPDEST SWAP5 POP POP PUSH1 0x40 PUSH3 0x503 DUP9 DUP3 DUP10 ADD PUSH3 0x3F4 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x60 PUSH3 0x516 DUP9 DUP3 DUP10 ADD PUSH3 0x3F4 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x80 PUSH3 0x529 DUP9 DUP3 DUP10 ADD PUSH3 0x459 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 POP SWAP3 SWAP6 SWAP1 SWAP4 POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH3 0x589 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH3 0x59F JUMPI PUSH3 0x59E PUSH3 0x541 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP2 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 PUSH1 0x1F DUP4 ADD DIV SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 SHL SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x8 DUP4 MUL PUSH3 0x609 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 PUSH3 0x5CA JUMP JUMPDEST PUSH3 0x615 DUP7 DUP4 PUSH3 0x5CA JUMP JUMPDEST SWAP6 POP DUP1 NOT DUP5 AND SWAP4 POP DUP1 DUP7 AND DUP5 OR SWAP3 POP POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x658 PUSH3 0x652 PUSH3 0x64C DUP5 PUSH3 0x3D0 JUMP JUMPDEST PUSH3 0x62D JUMP JUMPDEST PUSH3 0x3D0 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x674 DUP4 PUSH3 0x637 JUMP JUMPDEST PUSH3 0x68C PUSH3 0x683 DUP3 PUSH3 0x65F JUMP JUMPDEST DUP5 DUP5 SLOAD PUSH3 0x5D7 JUMP JUMPDEST DUP3 SSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x0 SWAP1 JUMP JUMPDEST PUSH3 0x6A3 PUSH3 0x694 JUMP JUMPDEST PUSH3 0x6B0 DUP2 DUP5 DUP5 PUSH3 0x669 JUMP JUMPDEST POP POP POP JUMP JUMPDEST JUMPDEST DUP2 DUP2 LT ISZERO PUSH3 0x6D8 JUMPI PUSH3 0x6CC PUSH1 0x0 DUP3 PUSH3 0x699 JUMP JUMPDEST PUSH1 0x1 DUP2 ADD SWAP1 POP PUSH3 0x6B6 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1F DUP3 GT ISZERO PUSH3 0x727 JUMPI PUSH3 0x6F1 DUP2 PUSH3 0x5A5 JUMP JUMPDEST PUSH3 0x6FC DUP5 PUSH3 0x5BA JUMP JUMPDEST DUP2 ADD PUSH1 0x20 DUP6 LT ISZERO PUSH3 0x70C JUMPI DUP2 SWAP1 POP JUMPDEST PUSH3 0x724 PUSH3 0x71B DUP6 PUSH3 0x5BA JUMP JUMPDEST DUP4 ADD DUP3 PUSH3 0x6B5 JUMP JUMPDEST POP POP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 SHR SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x74C PUSH1 0x0 NOT DUP5 PUSH1 0x8 MUL PUSH3 0x72C JUMP JUMPDEST NOT DUP1 DUP4 AND SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x767 DUP4 DUP4 PUSH3 0x739 JUMP JUMPDEST SWAP2 POP DUP3 PUSH1 0x2 MUL DUP3 OR SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH3 0x782 DUP3 PUSH3 0x536 JUMP JUMPDEST PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x79E JUMPI PUSH3 0x79D PUSH3 0x26C JUMP JUMPDEST JUMPDEST PUSH3 0x7AA DUP3 SLOAD PUSH3 0x570 JUMP JUMPDEST PUSH3 0x7B7 DUP3 DUP3 DUP6 PUSH3 0x6DC JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 SWAP1 POP PUSH1 0x1F DUP4 GT PUSH1 0x1 DUP2 EQ PUSH3 0x7EF JUMPI PUSH1 0x0 DUP5 ISZERO PUSH3 0x7DA JUMPI DUP3 DUP8 ADD MLOAD SWAP1 POP JUMPDEST PUSH3 0x7E6 DUP6 DUP3 PUSH3 0x759 JUMP JUMPDEST DUP7 SSTORE POP PUSH3 0x856 JUMP JUMPDEST PUSH1 0x1F NOT DUP5 AND PUSH3 0x7FF DUP7 PUSH3 0x5A5 JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP3 DUP2 LT ISZERO PUSH3 0x829 JUMPI DUP5 DUP10 ADD MLOAD DUP3 SSTORE PUSH1 0x1 DUP3 ADD SWAP2 POP PUSH1 0x20 DUP6 ADD SWAP5 POP PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x802 JUMP JUMPDEST DUP7 DUP4 LT ISZERO PUSH3 0x849 JUMPI DUP5 DUP10 ADD MLOAD PUSH3 0x845 PUSH1 0x1F DUP10 AND DUP3 PUSH3 0x739 JUMP JUMPDEST DUP4 SSTORE POP JUMPDEST PUSH1 0x1 PUSH1 0x2 DUP9 MUL ADD DUP9 SSTORE POP POP POP JUMPDEST POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x526F79616C74792070657263656E746167652073686F756C6420626520626574 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7765656E203020616E6420313000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x8CD PUSH1 0x2D DUP4 PUSH3 0x85E JUMP JUMPDEST SWAP2 POP PUSH3 0x8DA DUP3 PUSH3 0x86F JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH3 0x900 DUP2 PUSH3 0x8BE JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x3EC8 DUP1 PUSH3 0x917 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x1C2 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x8DA5CB5B GT PUSH2 0xF7 JUMPI DUP1 PUSH4 0xB88D4FDE GT PUSH2 0x95 JUMPI DUP1 PUSH4 0xDBA417FB GT PUSH2 0x64 JUMPI DUP1 PUSH4 0xDBA417FB EQ PUSH2 0x634 JUMPI DUP1 PUSH4 0xE985E9C5 EQ PUSH2 0x65F JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x69C JUMPI DUP1 PUSH4 0xF7EA7A3D EQ PUSH2 0x6C5 JUMPI PUSH2 0x1C2 JUMP JUMPDEST DUP1 PUSH4 0xB88D4FDE EQ PUSH2 0x587 JUMPI DUP1 PUSH4 0xC87B56DD EQ PUSH2 0x5B0 JUMPI DUP1 PUSH4 0xCFC86F7B EQ PUSH2 0x5ED JUMPI DUP1 PUSH4 0xD0DEF521 EQ PUSH2 0x618 JUMPI PUSH2 0x1C2 JUMP JUMPDEST DUP1 PUSH4 0x9FBC8713 GT PUSH2 0xD1 JUMPI DUP1 PUSH4 0x9FBC8713 EQ PUSH2 0x4DF JUMPI DUP1 PUSH4 0xA0BCFC7F EQ PUSH2 0x50A JUMPI DUP1 PUSH4 0xA22CB465 EQ PUSH2 0x533 JUMPI DUP1 PUSH4 0xA4FEFAD6 EQ PUSH2 0x55C JUMPI PUSH2 0x1C2 JUMP JUMPDEST DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x460 JUMPI DUP1 PUSH4 0x8DC251E3 EQ PUSH2 0x48B JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x4B4 JUMPI PUSH2 0x1C2 JUMP JUMPDEST DUP1 PUSH4 0x42842E0E GT PUSH2 0x164 JUMPI DUP1 PUSH4 0x70A08231 GT PUSH2 0x13E JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x3B6 JUMPI DUP1 PUSH4 0x715018A6 EQ PUSH2 0x3F3 JUMPI DUP1 PUSH4 0x771282F6 EQ PUSH2 0x40A JUMPI DUP1 PUSH4 0x8A71BB2D EQ PUSH2 0x435 JUMPI PUSH2 0x1C2 JUMP JUMPDEST DUP1 PUSH4 0x42842E0E EQ PUSH2 0x327 JUMPI DUP1 PUSH4 0x61BA27DA EQ PUSH2 0x350 JUMPI DUP1 PUSH4 0x6352211E EQ PUSH2 0x379 JUMPI PUSH2 0x1C2 JUMP JUMPDEST DUP1 PUSH4 0x95EA7B3 GT PUSH2 0x1A0 JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0x26C JUMPI DUP1 PUSH4 0x22F4596F EQ PUSH2 0x295 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x2C0 JUMPI DUP1 PUSH4 0x2A55205A EQ PUSH2 0x2E9 JUMPI PUSH2 0x1C2 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x1C7 JUMPI DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0x204 JUMPI DUP1 PUSH4 0x81812FC EQ PUSH2 0x22F JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1D3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1EE PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1E9 SWAP2 SWAP1 PUSH2 0x26B5 JUMP JUMPDEST PUSH2 0x6EE JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1FB SWAP2 SWAP1 PUSH2 0x26FD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x210 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x219 PUSH2 0x700 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x226 SWAP2 SWAP1 PUSH2 0x27A8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x23B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x256 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x251 SWAP2 SWAP1 PUSH2 0x2800 JUMP JUMPDEST PUSH2 0x792 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x263 SWAP2 SWAP1 PUSH2 0x286E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x278 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x293 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x28E SWAP2 SWAP1 PUSH2 0x28B5 JUMP JUMPDEST PUSH2 0x7D8 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2A1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2AA PUSH2 0x8EF JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2B7 SWAP2 SWAP1 PUSH2 0x2904 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2CC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2E7 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2E2 SWAP2 SWAP1 PUSH2 0x291F JUMP JUMPDEST PUSH2 0x8F5 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2F5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x310 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x30B SWAP2 SWAP1 PUSH2 0x2972 JUMP JUMPDEST PUSH2 0x955 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x31E SWAP3 SWAP2 SWAP1 PUSH2 0x29B2 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x333 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x34E PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x349 SWAP2 SWAP1 PUSH2 0x291F JUMP JUMPDEST PUSH2 0x997 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x35C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x377 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x372 SWAP2 SWAP1 PUSH2 0x2800 JUMP JUMPDEST PUSH2 0x9B7 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x385 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x3A0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x39B SWAP2 SWAP1 PUSH2 0x2800 JUMP JUMPDEST PUSH2 0xA51 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x3AD SWAP2 SWAP1 PUSH2 0x286E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3C2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x3DD PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x3D8 SWAP2 SWAP1 PUSH2 0x29DB JUMP JUMPDEST PUSH2 0xAD7 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x3EA SWAP2 SWAP1 PUSH2 0x2904 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3FF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x408 PUSH2 0xB8E JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x416 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x41F PUSH2 0xBA2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x42C SWAP2 SWAP1 PUSH2 0x2904 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x441 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x44A PUSH2 0xBB3 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x457 SWAP2 SWAP1 PUSH2 0x2904 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x46C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x475 PUSH2 0xBB9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x482 SWAP2 SWAP1 PUSH2 0x286E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x497 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x4B2 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x4AD SWAP2 SWAP1 PUSH2 0x2A46 JUMP JUMPDEST PUSH2 0xBE3 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x4C0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x4C9 PUSH2 0xC72 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x4D6 SWAP2 SWAP1 PUSH2 0x27A8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x4EB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x4F4 PUSH2 0xD04 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x501 SWAP2 SWAP1 PUSH2 0x2A82 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x516 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x531 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x52C SWAP2 SWAP1 PUSH2 0x2BD2 JUMP JUMPDEST PUSH2 0xD2A JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x53F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x55A PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x555 SWAP2 SWAP1 PUSH2 0x2C47 JUMP JUMPDEST PUSH2 0xD45 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x568 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x571 PUSH2 0xD5B JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x57E SWAP2 SWAP1 PUSH2 0x2904 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x593 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x5AE PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x5A9 SWAP2 SWAP1 PUSH2 0x2D28 JUMP JUMPDEST PUSH2 0xD61 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x5BC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x5D7 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x5D2 SWAP2 SWAP1 PUSH2 0x2800 JUMP JUMPDEST PUSH2 0xDC3 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x5E4 SWAP2 SWAP1 PUSH2 0x27A8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x5F9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x602 PUSH2 0xDD5 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x60F SWAP2 SWAP1 PUSH2 0x27A8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x632 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x62D SWAP2 SWAP1 PUSH2 0x2DAB JUMP JUMPDEST PUSH2 0xE63 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x640 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x649 PUSH2 0x10BC JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x656 SWAP2 SWAP1 PUSH2 0x2E66 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x66B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x686 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x681 SWAP2 SWAP1 PUSH2 0x2E81 JUMP JUMPDEST PUSH2 0x10E2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x693 SWAP2 SWAP1 PUSH2 0x26FD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x6A8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x6C3 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x6BE SWAP2 SWAP1 PUSH2 0x29DB JUMP JUMPDEST PUSH2 0x1176 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x6D1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x6EC PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x6E7 SWAP2 SWAP1 PUSH2 0x2800 JUMP JUMPDEST PUSH2 0x11F9 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 PUSH2 0x6F9 DUP3 PUSH2 0x1292 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x0 DUP1 SLOAD PUSH2 0x70F SWAP1 PUSH2 0x2EF0 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x73B SWAP1 PUSH2 0x2EF0 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x788 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x75D JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x788 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x76B JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x79D DUP3 PUSH2 0x12F3 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x7E3 DUP3 PUSH2 0xA51 JUMP JUMPDEST SWAP1 POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x853 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x84A SWAP1 PUSH2 0x2F93 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x872 PUSH2 0x133E JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ DUP1 PUSH2 0x8A1 JUMPI POP PUSH2 0x8A0 DUP2 PUSH2 0x89B PUSH2 0x133E JUMP JUMPDEST PUSH2 0x10E2 JUMP JUMPDEST JUMPDEST PUSH2 0x8E0 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x8D7 SWAP1 PUSH2 0x3025 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x8EA DUP4 DUP4 PUSH2 0x1346 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x9 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x906 PUSH2 0x900 PUSH2 0x133E JUMP JUMPDEST DUP3 PUSH2 0x13FF JUMP JUMPDEST PUSH2 0x945 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x93C SWAP1 PUSH2 0x30B7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x950 DUP4 DUP4 DUP4 PUSH2 0x1494 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x961 DUP5 PUSH2 0xA51 JUMP JUMPDEST PUSH1 0x64 PUSH1 0xE PUSH1 0x0 DUP8 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD DUP6 PUSH2 0x982 SWAP2 SWAP1 PUSH2 0x3106 JUMP JUMPDEST PUSH2 0x98C SWAP2 SWAP1 PUSH2 0x3177 JUMP JUMPDEST SWAP2 POP SWAP2 POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH2 0x9B2 DUP4 DUP4 DUP4 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 DUP2 MSTORE POP PUSH2 0xD61 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH2 0x9BF PUSH2 0x178D JUMP JUMPDEST PUSH1 0x0 DUP2 LT ISZERO DUP1 ISZERO PUSH2 0x9D1 JUMPI POP PUSH1 0xA DUP2 GT ISZERO JUMPDEST PUSH2 0xA10 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xA07 SWAP1 PUSH2 0x321A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0xD DUP2 SWAP1 SSTORE POP PUSH32 0x97FEE33738C3B9707C632B2981166EBDF0C1A6504B34CE6878AEF1CD6CECEF03 DUP2 PUSH1 0x40 MLOAD PUSH2 0xA46 SWAP2 SWAP1 PUSH2 0x2904 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0xA5D DUP4 PUSH2 0x180B JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0xACE JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xAC5 SWAP1 PUSH2 0x3286 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 SWAP2 POP POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0xB47 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xB3E SWAP1 PUSH2 0x3318 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x3 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xB96 PUSH2 0x178D JUMP JUMPDEST PUSH2 0xBA0 PUSH1 0x0 PUSH2 0x1848 JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x0 PUSH2 0xBAE PUSH1 0x8 PUSH2 0x190E JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0xD SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x7 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH2 0xBEB PUSH2 0x178D JUMP JUMPDEST DUP1 PUSH1 0xC PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x1B7503B18E6E011FD6A493067321794279EB00B8BAD2BAEFA1D771B2E98F216C PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x1 DUP1 SLOAD PUSH2 0xC81 SWAP1 PUSH2 0x2EF0 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0xCAD SWAP1 PUSH2 0x2EF0 JUMP JUMPDEST DUP1 ISZERO PUSH2 0xCFA JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xCCF JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xCFA JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xCDD JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0xC PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH2 0xD32 PUSH2 0x178D JUMP JUMPDEST DUP1 PUSH1 0xB SWAP1 DUP2 PUSH2 0xD41 SWAP2 SWAP1 PUSH2 0x34DA JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH2 0xD57 PUSH2 0xD50 PUSH2 0x133E JUMP JUMPDEST DUP4 DUP4 PUSH2 0x191C JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0xA SLOAD DUP2 JUMP JUMPDEST PUSH2 0xD72 PUSH2 0xD6C PUSH2 0x133E JUMP JUMPDEST DUP4 PUSH2 0x13FF JUMP JUMPDEST PUSH2 0xDB1 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xDA8 SWAP1 PUSH2 0x30B7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xDBD DUP5 DUP5 DUP5 DUP5 PUSH2 0x1A88 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH2 0xDCE DUP3 PUSH2 0x1AE4 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0xB DUP1 SLOAD PUSH2 0xDE2 SWAP1 PUSH2 0x2EF0 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0xE0E SWAP1 PUSH2 0x2EF0 JUMP JUMPDEST DUP1 ISZERO PUSH2 0xE5B JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xE30 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xE5B JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xE3E JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH2 0xE6B PUSH2 0x178D JUMP JUMPDEST PUSH1 0xF PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x6817C76C PUSH1 0x40 MLOAD DUP2 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0xED8 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0xEFC SWAP2 SWAP1 PUSH2 0x35C1 JUMP JUMPDEST CALLVALUE LT ISZERO PUSH2 0xF3E JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xF35 SWAP1 PUSH2 0x363A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 CALLVALUE EQ PUSH2 0x1016 JUMPI PUSH1 0x0 PUSH1 0xF PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLVALUE PUSH1 0x40 MLOAD PUSH2 0xF8E SWAP1 PUSH2 0x368B JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP8 GAS CALL SWAP3 POP POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0xFCB JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0xFD0 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x1014 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x100B SWAP1 PUSH2 0x36EC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP JUMPDEST PUSH1 0x0 PUSH1 0x9 SLOAD GT ISZERO PUSH2 0x106F JUMPI PUSH1 0x9 SLOAD PUSH2 0x102E PUSH1 0x8 PUSH2 0x190E JUMP JUMPDEST LT PUSH2 0x106E JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1065 SWAP1 PUSH2 0x3758 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMPDEST PUSH2 0x1079 PUSH1 0x8 PUSH2 0x1BF6 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1085 PUSH1 0x8 PUSH2 0x190E JUMP JUMPDEST SWAP1 POP PUSH2 0x1091 DUP4 DUP3 PUSH2 0x1C0C JUMP JUMPDEST PUSH2 0x109B DUP2 DUP4 PUSH2 0x1C2A JUMP JUMPDEST PUSH2 0x10A7 DUP2 PUSH1 0xD SLOAD PUSH2 0x1CCE JUMP JUMPDEST PUSH2 0x10B1 PUSH1 0x8 PUSH2 0x190E JUMP JUMPDEST PUSH1 0xA DUP2 SWAP1 SSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0xF PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x5 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x117E PUSH2 0x178D JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x11ED JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x11E4 SWAP1 PUSH2 0x37EA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x11F6 DUP2 PUSH2 0x1848 JUMP JUMPDEST POP JUMP JUMPDEST PUSH2 0x1201 PUSH2 0x178D JUMP JUMPDEST PUSH1 0x0 DUP2 EQ DUP1 PUSH2 0x1212 JUMPI POP PUSH1 0xA SLOAD DUP2 LT ISZERO JUMPDEST PUSH2 0x1251 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1248 SWAP1 PUSH2 0x387C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x9 DUP2 SWAP1 SSTORE POP PUSH32 0xC80EA35A3F9016535E5B7C87746740C5045AFE42188D02C5786EB97495C2F429 DUP2 PUSH1 0x40 MLOAD PUSH2 0x1287 SWAP2 SWAP1 PUSH2 0x2904 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP JUMP JUMPDEST PUSH1 0x0 PUSH4 0x49064906 PUSH1 0xE0 SHL PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ DUP1 PUSH2 0x12EC JUMPI POP PUSH2 0x12EB DUP3 PUSH2 0x1D73 JUMP JUMPDEST JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x12FC DUP2 PUSH2 0x1E55 JUMP JUMPDEST PUSH2 0x133B JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1332 SWAP1 PUSH2 0x3286 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST DUP2 PUSH1 0x4 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x13B9 DUP4 PUSH2 0xA51 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x140B DUP4 PUSH2 0xA51 JUMP JUMPDEST SWAP1 POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ DUP1 PUSH2 0x144D JUMPI POP PUSH2 0x144C DUP2 DUP6 PUSH2 0x10E2 JUMP JUMPDEST JUMPDEST DUP1 PUSH2 0x148B JUMPI POP DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x1473 DUP5 PUSH2 0x792 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x14B4 DUP3 PUSH2 0xA51 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x150A JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1501 SWAP1 PUSH2 0x390E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x1579 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1570 SWAP1 PUSH2 0x39A0 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x1586 DUP4 DUP4 DUP4 PUSH1 0x1 PUSH2 0x1E96 JUMP JUMPDEST DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x15A6 DUP3 PUSH2 0xA51 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x15FC JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x15F3 SWAP1 PUSH2 0x390E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x4 PUSH1 0x0 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD SWAP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 SSTORE PUSH1 0x1 PUSH1 0x3 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD SUB SWAP3 POP POP DUP2 SWAP1 SSTORE POP PUSH1 0x1 PUSH1 0x3 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD ADD SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x2 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 PUSH2 0x1788 DUP4 DUP4 DUP4 PUSH1 0x1 PUSH2 0x1E9C JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH2 0x1795 PUSH2 0x133E JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x17B3 PUSH2 0xBB9 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x1809 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1800 SWAP1 PUSH2 0x3A0C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x7 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x7 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 ADD SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x198A JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1981 SWAP1 PUSH2 0x3A78 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x5 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x17307EAB39AB6107E8899845AD3D59BD9653F200F220920489CA2B5937696C31 DUP4 PUSH1 0x40 MLOAD PUSH2 0x1A7B SWAP2 SWAP1 PUSH2 0x26FD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP POP JUMP JUMPDEST PUSH2 0x1A93 DUP5 DUP5 DUP5 PUSH2 0x1494 JUMP JUMPDEST PUSH2 0x1A9F DUP5 DUP5 DUP5 DUP5 PUSH2 0x1EA2 JUMP JUMPDEST PUSH2 0x1ADE JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1AD5 SWAP1 PUSH2 0x3B0A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH2 0x1AEF DUP3 PUSH2 0x12F3 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x6 PUSH1 0x0 DUP5 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP1 SLOAD PUSH2 0x1B0F SWAP1 PUSH2 0x2EF0 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x1B3B SWAP1 PUSH2 0x2EF0 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x1B88 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x1B5D JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x1B88 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x1B6B JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP PUSH1 0x0 PUSH2 0x1B99 PUSH2 0x2029 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 DUP2 MLOAD SUB PUSH2 0x1BAE JUMPI DUP2 SWAP3 POP POP POP PUSH2 0x1BF1 JUMP JUMPDEST PUSH1 0x0 DUP3 MLOAD GT ISZERO PUSH2 0x1BE3 JUMPI DUP1 DUP3 PUSH1 0x40 MLOAD PUSH1 0x20 ADD PUSH2 0x1BCB SWAP3 SWAP2 SWAP1 PUSH2 0x3B66 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE SWAP3 POP POP POP PUSH2 0x1BF1 JUMP JUMPDEST PUSH2 0x1BEC DUP5 PUSH2 0x20BB JUMP JUMPDEST SWAP3 POP POP POP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 DUP2 PUSH1 0x0 ADD PUSH1 0x0 DUP3 DUP3 SLOAD ADD SWAP3 POP POP DUP2 SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH2 0x1C26 DUP3 DUP3 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 DUP2 MSTORE POP PUSH2 0x2123 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH2 0x1C33 DUP3 PUSH2 0x1E55 JUMP JUMPDEST PUSH2 0x1C72 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1C69 SWAP1 PUSH2 0x3BFC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x6 PUSH1 0x0 DUP5 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SWAP1 DUP2 PUSH2 0x1C92 SWAP2 SWAP1 PUSH2 0x34DA JUMP JUMPDEST POP PUSH32 0xF8E1A15ABA9398E019F0B49DF1A4FDE98EE17AE345CB5F6B5E2C27F5033E8CE7 DUP3 PUSH1 0x40 MLOAD PUSH2 0x1CC2 SWAP2 SWAP1 PUSH2 0x2904 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP POP JUMP JUMPDEST PUSH2 0x1CDF PUSH2 0x1CD9 PUSH2 0x133E JUMP JUMPDEST DUP4 PUSH2 0x13FF JUMP JUMPDEST PUSH2 0x1D1E JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1D15 SWAP1 PUSH2 0x3C8E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0xE PUSH1 0x0 DUP5 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH32 0x84015E3D2316D77944B5F67D4F1B13A70233C30A9F6AFBE51EED064FBD9E2B22 DUP3 DUP3 PUSH1 0x40 MLOAD PUSH2 0x1D67 SWAP3 SWAP2 SWAP1 PUSH2 0x3CAE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH32 0x80AC58CD00000000000000000000000000000000000000000000000000000000 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ DUP1 PUSH2 0x1E3E JUMPI POP PUSH32 0x5B5E139F00000000000000000000000000000000000000000000000000000000 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ JUMPDEST DUP1 PUSH2 0x1E4E JUMPI POP PUSH2 0x1E4D DUP3 PUSH2 0x217E JUMP JUMPDEST JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x1E77 DUP4 PUSH2 0x180B JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1EC3 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x21E8 JUMP JUMPDEST ISZERO PUSH2 0x201C JUMPI DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x150B7A02 PUSH2 0x1EEC PUSH2 0x133E JUMP JUMPDEST DUP8 DUP7 DUP7 PUSH1 0x40 MLOAD DUP6 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1F0E SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x3D2C JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 GAS CALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x1F4A JUMPI POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x1F47 SWAP2 SWAP1 PUSH2 0x3D8D JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x1FCC JUMPI RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x1F7A JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x1F7F JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP PUSH1 0x0 DUP2 MLOAD SUB PUSH2 0x1FC4 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1FBB SWAP1 PUSH2 0x3B0A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 MLOAD DUP2 PUSH1 0x20 ADD REVERT JUMPDEST PUSH4 0x150B7A02 PUSH1 0xE0 SHL PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP2 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ SWAP2 POP POP PUSH2 0x2021 JUMP JUMPDEST PUSH1 0x1 SWAP1 POP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0xB DUP1 SLOAD PUSH2 0x2038 SWAP1 PUSH2 0x2EF0 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x2064 SWAP1 PUSH2 0x2EF0 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x20B1 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x2086 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x20B1 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x2094 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x60 PUSH2 0x20C6 DUP3 PUSH2 0x12F3 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x20D0 PUSH2 0x2029 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 DUP2 MLOAD GT PUSH2 0x20F0 JUMPI PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 DUP2 MSTORE POP PUSH2 0x211B JUMP JUMPDEST DUP1 PUSH2 0x20FA DUP5 PUSH2 0x220B JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 ADD PUSH2 0x210B SWAP3 SWAP2 SWAP1 PUSH2 0x3B66 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE JUMPDEST SWAP2 POP POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x212D DUP4 DUP4 PUSH2 0x22D9 JUMP JUMPDEST PUSH2 0x213A PUSH1 0x0 DUP5 DUP5 DUP5 PUSH2 0x1EA2 JUMP JUMPDEST PUSH2 0x2179 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x2170 SWAP1 PUSH2 0x3B0A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EXTCODESIZE GT SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x0 PUSH1 0x1 PUSH2 0x221A DUP5 PUSH2 0x24F6 JUMP JUMPDEST ADD SWAP1 POP PUSH1 0x0 DUP2 PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x2239 JUMPI PUSH2 0x2238 PUSH2 0x2AA7 JUMP JUMPDEST JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP1 DUP3 MSTORE DUP1 PUSH1 0x1F ADD PUSH1 0x1F NOT AND PUSH1 0x20 ADD DUP3 ADD PUSH1 0x40 MSTORE DUP1 ISZERO PUSH2 0x226B JUMPI DUP2 PUSH1 0x20 ADD PUSH1 0x1 DUP3 MUL DUP1 CALLDATASIZE DUP4 CALLDATACOPY DUP1 DUP3 ADD SWAP2 POP POP SWAP1 POP JUMPDEST POP SWAP1 POP PUSH1 0x0 DUP3 PUSH1 0x20 ADD DUP3 ADD SWAP1 POP JUMPDEST PUSH1 0x1 ISZERO PUSH2 0x22CE JUMPI DUP1 DUP1 PUSH1 0x1 SWAP1 SUB SWAP2 POP POP PUSH32 0x3031323334353637383961626364656600000000000000000000000000000000 PUSH1 0xA DUP7 MOD BYTE DUP2 MSTORE8 PUSH1 0xA DUP6 DUP2 PUSH2 0x22C2 JUMPI PUSH2 0x22C1 PUSH2 0x3148 JUMP JUMPDEST JUMPDEST DIV SWAP5 POP PUSH1 0x0 DUP6 SUB PUSH2 0x2279 JUMPI JUMPDEST DUP2 SWAP4 POP POP POP POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x2348 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x233F SWAP1 PUSH2 0x3E06 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x2351 DUP2 PUSH2 0x1E55 JUMP JUMPDEST ISZERO PUSH2 0x2391 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x2388 SWAP1 PUSH2 0x3E72 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x239F PUSH1 0x0 DUP4 DUP4 PUSH1 0x1 PUSH2 0x1E96 JUMP JUMPDEST PUSH2 0x23A8 DUP2 PUSH2 0x1E55 JUMP JUMPDEST ISZERO PUSH2 0x23E8 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x23DF SWAP1 PUSH2 0x3E72 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0x3 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD ADD SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x2 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 PUSH2 0x24F2 PUSH1 0x0 DUP4 DUP4 PUSH1 0x1 PUSH2 0x1E9C JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 POP PUSH27 0x184F03E93FF9F4DAA797ED6E38ED64BF6A1F010000000000000000 DUP4 LT PUSH2 0x2554 JUMPI PUSH27 0x184F03E93FF9F4DAA797ED6E38ED64BF6A1F010000000000000000 DUP4 DUP2 PUSH2 0x254A JUMPI PUSH2 0x2549 PUSH2 0x3148 JUMP JUMPDEST JUMPDEST DIV SWAP3 POP PUSH1 0x40 DUP2 ADD SWAP1 POP JUMPDEST PUSH14 0x4EE2D6D415B85ACEF8100000000 DUP4 LT PUSH2 0x2591 JUMPI PUSH14 0x4EE2D6D415B85ACEF8100000000 DUP4 DUP2 PUSH2 0x2587 JUMPI PUSH2 0x2586 PUSH2 0x3148 JUMP JUMPDEST JUMPDEST DIV SWAP3 POP PUSH1 0x20 DUP2 ADD SWAP1 POP JUMPDEST PUSH7 0x2386F26FC10000 DUP4 LT PUSH2 0x25C0 JUMPI PUSH7 0x2386F26FC10000 DUP4 DUP2 PUSH2 0x25B6 JUMPI PUSH2 0x25B5 PUSH2 0x3148 JUMP JUMPDEST JUMPDEST DIV SWAP3 POP PUSH1 0x10 DUP2 ADD SWAP1 POP JUMPDEST PUSH4 0x5F5E100 DUP4 LT PUSH2 0x25E9 JUMPI PUSH4 0x5F5E100 DUP4 DUP2 PUSH2 0x25DF JUMPI PUSH2 0x25DE PUSH2 0x3148 JUMP JUMPDEST JUMPDEST DIV SWAP3 POP PUSH1 0x8 DUP2 ADD SWAP1 POP JUMPDEST PUSH2 0x2710 DUP4 LT PUSH2 0x260E JUMPI PUSH2 0x2710 DUP4 DUP2 PUSH2 0x2604 JUMPI PUSH2 0x2603 PUSH2 0x3148 JUMP JUMPDEST JUMPDEST DIV SWAP3 POP PUSH1 0x4 DUP2 ADD SWAP1 POP JUMPDEST PUSH1 0x64 DUP4 LT PUSH2 0x2631 JUMPI PUSH1 0x64 DUP4 DUP2 PUSH2 0x2627 JUMPI PUSH2 0x2626 PUSH2 0x3148 JUMP JUMPDEST JUMPDEST DIV SWAP3 POP PUSH1 0x2 DUP2 ADD SWAP1 POP JUMPDEST PUSH1 0xA DUP4 LT PUSH2 0x2640 JUMPI PUSH1 0x1 DUP2 ADD SWAP1 POP JUMPDEST DUP1 SWAP2 POP POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x2692 DUP2 PUSH2 0x265D JUMP JUMPDEST DUP2 EQ PUSH2 0x269D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x26AF DUP2 PUSH2 0x2689 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x26CB JUMPI PUSH2 0x26CA PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x26D9 DUP5 DUP3 DUP6 ADD PUSH2 0x26A0 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x26F7 DUP2 PUSH2 0x26E2 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x2712 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x26EE JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x2752 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x2737 JUMP JUMPDEST PUSH1 0x0 DUP5 DUP5 ADD MSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x277A DUP3 PUSH2 0x2718 JUMP JUMPDEST PUSH2 0x2784 DUP2 DUP6 PUSH2 0x2723 JUMP JUMPDEST SWAP4 POP PUSH2 0x2794 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x2734 JUMP JUMPDEST PUSH2 0x279D DUP2 PUSH2 0x275E JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x27C2 DUP2 DUP5 PUSH2 0x276F JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x27DD DUP2 PUSH2 0x27CA JUMP JUMPDEST DUP2 EQ PUSH2 0x27E8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x27FA DUP2 PUSH2 0x27D4 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x2816 JUMPI PUSH2 0x2815 PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x2824 DUP5 DUP3 DUP6 ADD PUSH2 0x27EB JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2858 DUP3 PUSH2 0x282D JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x2868 DUP2 PUSH2 0x284D JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x2883 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x285F JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x2892 DUP2 PUSH2 0x284D JUMP JUMPDEST DUP2 EQ PUSH2 0x289D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x28AF DUP2 PUSH2 0x2889 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x28CC JUMPI PUSH2 0x28CB PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x28DA DUP6 DUP3 DUP7 ADD PUSH2 0x28A0 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x28EB DUP6 DUP3 DUP7 ADD PUSH2 0x27EB JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH2 0x28FE DUP2 PUSH2 0x27CA JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x2919 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x28F5 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x2938 JUMPI PUSH2 0x2937 PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x2946 DUP7 DUP3 DUP8 ADD PUSH2 0x28A0 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x2957 DUP7 DUP3 DUP8 ADD PUSH2 0x28A0 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH2 0x2968 DUP7 DUP3 DUP8 ADD PUSH2 0x27EB JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x2989 JUMPI PUSH2 0x2988 PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x2997 DUP6 DUP3 DUP7 ADD PUSH2 0x27EB JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x29A8 DUP6 DUP3 DUP7 ADD PUSH2 0x27EB JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x29C7 PUSH1 0x0 DUP4 ADD DUP6 PUSH2 0x285F JUMP JUMPDEST PUSH2 0x29D4 PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x28F5 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x29F1 JUMPI PUSH2 0x29F0 PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x29FF DUP5 DUP3 DUP6 ADD PUSH2 0x28A0 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2A13 DUP3 PUSH2 0x282D JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x2A23 DUP2 PUSH2 0x2A08 JUMP JUMPDEST DUP2 EQ PUSH2 0x2A2E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x2A40 DUP2 PUSH2 0x2A1A JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x2A5C JUMPI PUSH2 0x2A5B PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x2A6A DUP5 DUP3 DUP6 ADD PUSH2 0x2A31 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x2A7C DUP2 PUSH2 0x2A08 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x2A97 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x2A73 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH2 0x2ADF DUP3 PUSH2 0x275E JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0x2AFE JUMPI PUSH2 0x2AFD PUSH2 0x2AA7 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2B11 PUSH2 0x2649 JUMP JUMPDEST SWAP1 POP PUSH2 0x2B1D DUP3 DUP3 PUSH2 0x2AD6 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x2B3D JUMPI PUSH2 0x2B3C PUSH2 0x2AA7 JUMP JUMPDEST JUMPDEST PUSH2 0x2B46 DUP3 PUSH2 0x275E JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH1 0x0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2B75 PUSH2 0x2B70 DUP5 PUSH2 0x2B22 JUMP JUMPDEST PUSH2 0x2B07 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0x2B91 JUMPI PUSH2 0x2B90 PUSH2 0x2AA2 JUMP JUMPDEST JUMPDEST PUSH2 0x2B9C DUP5 DUP3 DUP6 PUSH2 0x2B53 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x2BB9 JUMPI PUSH2 0x2BB8 PUSH2 0x2A9D JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0x2BC9 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0x2B62 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x2BE8 JUMPI PUSH2 0x2BE7 PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 DUP3 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x2C06 JUMPI PUSH2 0x2C05 PUSH2 0x2658 JUMP JUMPDEST JUMPDEST PUSH2 0x2C12 DUP5 DUP3 DUP6 ADD PUSH2 0x2BA4 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x2C24 DUP2 PUSH2 0x26E2 JUMP JUMPDEST DUP2 EQ PUSH2 0x2C2F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x2C41 DUP2 PUSH2 0x2C1B JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x2C5E JUMPI PUSH2 0x2C5D PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x2C6C DUP6 DUP3 DUP7 ADD PUSH2 0x28A0 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x2C7D DUP6 DUP3 DUP7 ADD PUSH2 0x2C32 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x2CA2 JUMPI PUSH2 0x2CA1 PUSH2 0x2AA7 JUMP JUMPDEST JUMPDEST PUSH2 0x2CAB DUP3 PUSH2 0x275E JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2CCB PUSH2 0x2CC6 DUP5 PUSH2 0x2C87 JUMP JUMPDEST PUSH2 0x2B07 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0x2CE7 JUMPI PUSH2 0x2CE6 PUSH2 0x2AA2 JUMP JUMPDEST JUMPDEST PUSH2 0x2CF2 DUP5 DUP3 DUP6 PUSH2 0x2B53 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x2D0F JUMPI PUSH2 0x2D0E PUSH2 0x2A9D JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0x2D1F DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0x2CB8 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x80 DUP6 DUP8 SUB SLT ISZERO PUSH2 0x2D42 JUMPI PUSH2 0x2D41 PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x2D50 DUP8 DUP3 DUP9 ADD PUSH2 0x28A0 JUMP JUMPDEST SWAP5 POP POP PUSH1 0x20 PUSH2 0x2D61 DUP8 DUP3 DUP9 ADD PUSH2 0x28A0 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x40 PUSH2 0x2D72 DUP8 DUP3 DUP9 ADD PUSH2 0x27EB JUMP JUMPDEST SWAP3 POP POP PUSH1 0x60 DUP6 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x2D93 JUMPI PUSH2 0x2D92 PUSH2 0x2658 JUMP JUMPDEST JUMPDEST PUSH2 0x2D9F DUP8 DUP3 DUP9 ADD PUSH2 0x2CFA JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 SWAP2 SWAP5 POP SWAP3 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x2DC2 JUMPI PUSH2 0x2DC1 PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x2DD0 DUP6 DUP3 DUP7 ADD PUSH2 0x28A0 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 DUP4 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x2DF1 JUMPI PUSH2 0x2DF0 PUSH2 0x2658 JUMP JUMPDEST JUMPDEST PUSH2 0x2DFD DUP6 DUP3 DUP7 ADD PUSH2 0x2BA4 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2E2C PUSH2 0x2E27 PUSH2 0x2E22 DUP5 PUSH2 0x282D JUMP JUMPDEST PUSH2 0x2E07 JUMP JUMPDEST PUSH2 0x282D JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2E3E DUP3 PUSH2 0x2E11 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2E50 DUP3 PUSH2 0x2E33 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x2E60 DUP2 PUSH2 0x2E45 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x2E7B PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x2E57 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x2E98 JUMPI PUSH2 0x2E97 PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x2EA6 DUP6 DUP3 DUP7 ADD PUSH2 0x28A0 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x2EB7 DUP6 DUP3 DUP7 ADD PUSH2 0x28A0 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x2F08 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH2 0x2F1B JUMPI PUSH2 0x2F1A PUSH2 0x2EC1 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4552433732313A20617070726F76616C20746F2063757272656E74206F776E65 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7200000000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2F7D PUSH1 0x21 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x2F88 DUP3 PUSH2 0x2F21 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x2FAC DUP2 PUSH2 0x2F70 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4552433732313A20617070726F76652063616C6C6572206973206E6F7420746F PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6B656E206F776E6572206F7220617070726F76656420666F7220616C6C000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x300F PUSH1 0x3D DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x301A DUP3 PUSH2 0x2FB3 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x303E DUP2 PUSH2 0x3002 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4552433732313A2063616C6C6572206973206E6F7420746F6B656E206F776E65 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x72206F7220617070726F76656400000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x30A1 PUSH1 0x2D DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x30AC DUP3 PUSH2 0x3045 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x30D0 DUP2 PUSH2 0x3094 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x3111 DUP3 PUSH2 0x27CA JUMP JUMPDEST SWAP2 POP PUSH2 0x311C DUP4 PUSH2 0x27CA JUMP JUMPDEST SWAP3 POP DUP3 DUP3 MUL PUSH2 0x312A DUP2 PUSH2 0x27CA JUMP JUMPDEST SWAP2 POP DUP3 DUP3 DIV DUP5 EQ DUP4 ISZERO OR PUSH2 0x3141 JUMPI PUSH2 0x3140 PUSH2 0x30D7 JUMP JUMPDEST JUMPDEST POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x3182 DUP3 PUSH2 0x27CA JUMP JUMPDEST SWAP2 POP PUSH2 0x318D DUP4 PUSH2 0x27CA JUMP JUMPDEST SWAP3 POP DUP3 PUSH2 0x319D JUMPI PUSH2 0x319C PUSH2 0x3148 JUMP JUMPDEST JUMPDEST DUP3 DUP3 DIV SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x526F79616C74792070657263656E746167652073686F756C6420626520626574 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7765656E203020616E6420313000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3204 PUSH1 0x2D DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x320F DUP3 PUSH2 0x31A8 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3233 DUP2 PUSH2 0x31F7 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4552433732313A20696E76616C696420746F6B656E2049440000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3270 PUSH1 0x18 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x327B DUP3 PUSH2 0x323A JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x329F DUP2 PUSH2 0x3263 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4552433732313A2061646472657373207A65726F206973206E6F742061207661 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6C6964206F776E65720000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3302 PUSH1 0x29 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x330D DUP3 PUSH2 0x32A6 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3331 DUP2 PUSH2 0x32F5 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP2 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 PUSH1 0x1F DUP4 ADD DIV SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 SHL SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x8 DUP4 MUL PUSH2 0x339A PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 PUSH2 0x335D JUMP JUMPDEST PUSH2 0x33A4 DUP7 DUP4 PUSH2 0x335D JUMP JUMPDEST SWAP6 POP DUP1 NOT DUP5 AND SWAP4 POP DUP1 DUP7 AND DUP5 OR SWAP3 POP POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x33D7 PUSH2 0x33D2 PUSH2 0x33CD DUP5 PUSH2 0x27CA JUMP JUMPDEST PUSH2 0x2E07 JUMP JUMPDEST PUSH2 0x27CA JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x33F1 DUP4 PUSH2 0x33BC JUMP JUMPDEST PUSH2 0x3405 PUSH2 0x33FD DUP3 PUSH2 0x33DE JUMP JUMPDEST DUP5 DUP5 SLOAD PUSH2 0x336A JUMP JUMPDEST DUP3 SSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x0 SWAP1 JUMP JUMPDEST PUSH2 0x341A PUSH2 0x340D JUMP JUMPDEST PUSH2 0x3425 DUP2 DUP5 DUP5 PUSH2 0x33E8 JUMP JUMPDEST POP POP POP JUMP JUMPDEST JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x3449 JUMPI PUSH2 0x343E PUSH1 0x0 DUP3 PUSH2 0x3412 JUMP JUMPDEST PUSH1 0x1 DUP2 ADD SWAP1 POP PUSH2 0x342B JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1F DUP3 GT ISZERO PUSH2 0x348E JUMPI PUSH2 0x345F DUP2 PUSH2 0x3338 JUMP JUMPDEST PUSH2 0x3468 DUP5 PUSH2 0x334D JUMP JUMPDEST DUP2 ADD PUSH1 0x20 DUP6 LT ISZERO PUSH2 0x3477 JUMPI DUP2 SWAP1 POP JUMPDEST PUSH2 0x348B PUSH2 0x3483 DUP6 PUSH2 0x334D JUMP JUMPDEST DUP4 ADD DUP3 PUSH2 0x342A JUMP JUMPDEST POP POP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 SHR SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x34B1 PUSH1 0x0 NOT DUP5 PUSH1 0x8 MUL PUSH2 0x3493 JUMP JUMPDEST NOT DUP1 DUP4 AND SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x34CA DUP4 DUP4 PUSH2 0x34A0 JUMP JUMPDEST SWAP2 POP DUP3 PUSH1 0x2 MUL DUP3 OR SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x34E3 DUP3 PUSH2 0x2718 JUMP JUMPDEST PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x34FC JUMPI PUSH2 0x34FB PUSH2 0x2AA7 JUMP JUMPDEST JUMPDEST PUSH2 0x3506 DUP3 SLOAD PUSH2 0x2EF0 JUMP JUMPDEST PUSH2 0x3511 DUP3 DUP3 DUP6 PUSH2 0x344D JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 SWAP1 POP PUSH1 0x1F DUP4 GT PUSH1 0x1 DUP2 EQ PUSH2 0x3544 JUMPI PUSH1 0x0 DUP5 ISZERO PUSH2 0x3532 JUMPI DUP3 DUP8 ADD MLOAD SWAP1 POP JUMPDEST PUSH2 0x353C DUP6 DUP3 PUSH2 0x34BE JUMP JUMPDEST DUP7 SSTORE POP PUSH2 0x35A4 JUMP JUMPDEST PUSH1 0x1F NOT DUP5 AND PUSH2 0x3552 DUP7 PUSH2 0x3338 JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP3 DUP2 LT ISZERO PUSH2 0x357A JUMPI DUP5 DUP10 ADD MLOAD DUP3 SSTORE PUSH1 0x1 DUP3 ADD SWAP2 POP PUSH1 0x20 DUP6 ADD SWAP5 POP PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x3555 JUMP JUMPDEST DUP7 DUP4 LT ISZERO PUSH2 0x3597 JUMPI DUP5 DUP10 ADD MLOAD PUSH2 0x3593 PUSH1 0x1F DUP10 AND DUP3 PUSH2 0x34A0 JUMP JUMPDEST DUP4 SSTORE POP JUMPDEST PUSH1 0x1 PUSH1 0x2 DUP9 MUL ADD DUP9 SSTORE POP POP POP JUMPDEST POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH2 0x35BB DUP2 PUSH2 0x27D4 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x35D7 JUMPI PUSH2 0x35D6 PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x35E5 DUP5 DUP3 DUP6 ADD PUSH2 0x35AC JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E6F7420656E6F7567682066756E642073656E742E0000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3624 PUSH1 0x15 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x362F DUP3 PUSH2 0x35EE JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3653 DUP2 PUSH2 0x3617 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3675 PUSH1 0x0 DUP4 PUSH2 0x365A JUMP JUMPDEST SWAP2 POP PUSH2 0x3680 DUP3 PUSH2 0x3665 JUMP JUMPDEST PUSH1 0x0 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3696 DUP3 PUSH2 0x3668 JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x436F756C64206E6F74207472616E73666572207468652066756E640000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x36D6 PUSH1 0x1B DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x36E1 DUP3 PUSH2 0x36A0 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3705 DUP2 PUSH2 0x36C9 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4D617820737570706C7920726561636865640000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3742 PUSH1 0x12 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x374D DUP3 PUSH2 0x370C JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3771 DUP2 PUSH2 0x3735 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6464726573730000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x37D4 PUSH1 0x26 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x37DF DUP3 PUSH2 0x3778 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3803 DUP2 PUSH2 0x37C7 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x546F74616C20737570706C792073686F756C64206E6F74206265206C65737320 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7468616E207468652063757272656E7420737570706C79000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3866 PUSH1 0x37 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x3871 DUP3 PUSH2 0x380A JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3895 DUP2 PUSH2 0x3859 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4552433732313A207472616E736665722066726F6D20696E636F727265637420 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6F776E6572000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x38F8 PUSH1 0x25 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x3903 DUP3 PUSH2 0x389C JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3927 DUP2 PUSH2 0x38EB JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4552433732313A207472616E7366657220746F20746865207A65726F20616464 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7265737300000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x398A PUSH1 0x24 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x3995 DUP3 PUSH2 0x392E JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x39B9 DUP2 PUSH2 0x397D JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x39F6 PUSH1 0x20 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x3A01 DUP3 PUSH2 0x39C0 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3A25 DUP2 PUSH2 0x39E9 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4552433732313A20617070726F766520746F2063616C6C657200000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3A62 PUSH1 0x19 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x3A6D DUP3 PUSH2 0x3A2C JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3A91 DUP2 PUSH2 0x3A55 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4552433732313A207472616E7366657220746F206E6F6E204552433732315265 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x63656976657220696D706C656D656E7465720000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3AF4 PUSH1 0x32 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x3AFF DUP3 PUSH2 0x3A98 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3B23 DUP2 PUSH2 0x3AE7 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3B40 DUP3 PUSH2 0x2718 JUMP JUMPDEST PUSH2 0x3B4A DUP2 DUP6 PUSH2 0x3B2A JUMP JUMPDEST SWAP4 POP PUSH2 0x3B5A DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x2734 JUMP JUMPDEST DUP1 DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3B72 DUP3 DUP6 PUSH2 0x3B35 JUMP JUMPDEST SWAP2 POP PUSH2 0x3B7E DUP3 DUP5 PUSH2 0x3B35 JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0x45524337323155524953746F726167653A2055524920736574206F66206E6F6E PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6578697374656E7420746F6B656E000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3BE6 PUSH1 0x2E DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x3BF1 DUP3 PUSH2 0x3B8A JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3C15 DUP2 PUSH2 0x3BD9 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4552433732313A2063616C6C6572206973206E6F74206F776E6572206E6F7220 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x617070726F766564000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3C78 PUSH1 0x28 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x3C83 DUP3 PUSH2 0x3C1C JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3CA7 DUP2 PUSH2 0x3C6B JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x3CC3 PUSH1 0x0 DUP4 ADD DUP6 PUSH2 0x28F5 JUMP JUMPDEST PUSH2 0x3CD0 PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x28F5 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3CFE DUP3 PUSH2 0x3CD7 JUMP JUMPDEST PUSH2 0x3D08 DUP2 DUP6 PUSH2 0x3CE2 JUMP JUMPDEST SWAP4 POP PUSH2 0x3D18 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x2734 JUMP JUMPDEST PUSH2 0x3D21 DUP2 PUSH2 0x275E JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x80 DUP3 ADD SWAP1 POP PUSH2 0x3D41 PUSH1 0x0 DUP4 ADD DUP8 PUSH2 0x285F JUMP JUMPDEST PUSH2 0x3D4E PUSH1 0x20 DUP4 ADD DUP7 PUSH2 0x285F JUMP JUMPDEST PUSH2 0x3D5B PUSH1 0x40 DUP4 ADD DUP6 PUSH2 0x28F5 JUMP JUMPDEST DUP2 DUP2 SUB PUSH1 0x60 DUP4 ADD MSTORE PUSH2 0x3D6D DUP2 DUP5 PUSH2 0x3CF3 JUMP JUMPDEST SWAP1 POP SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH2 0x3D87 DUP2 PUSH2 0x2689 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x3DA3 JUMPI PUSH2 0x3DA2 PUSH2 0x2653 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x3DB1 DUP5 DUP3 DUP6 ADD PUSH2 0x3D78 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4552433732313A206D696E7420746F20746865207A65726F2061646472657373 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3DF0 PUSH1 0x20 DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x3DFB DUP3 PUSH2 0x3DBA JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3E1F DUP2 PUSH2 0x3DE3 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4552433732313A20746F6B656E20616C7265616479206D696E74656400000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x3E5C PUSH1 0x1C DUP4 PUSH2 0x2723 JUMP JUMPDEST SWAP2 POP PUSH2 0x3E67 DUP3 PUSH2 0x3E26 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x3E8B DUP2 PUSH2 0x3E4F JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xBC CODECOPY 0x5F PUSH29 0x42BEE1DE0D7BFBD0829F9169AB2B2F61EFCA713C9786706AD691B9F564 PUSH20 0x6F6C634300081200330000000000000000000000 ',
    sourceMap:
        '62874:4443:0:-:0;;;63551:558;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;63737:4;63743:6;43687:5;43679;:13;;;;;;:::i;:::-;;43712:7;43702;:17;;;;;;:::i;:::-;;43613:113;;20611:32;20630:12;:10;;;:12;;:::i;:::-;20611:18;;;:32;;:::i;:::-;63810:1:::1;63782:24;:29;;:63;;;;;63843:2;63815:24;:30;;63782:63;63761:155;;;;;;;;;;;;:::i;:::-;;;;;;;;;63939:13;63926:10;:26;;;;63988:10;63962:15;;:37;;;;;;;;;;;;;;;;;;64029:24;64009:17;:44;;;;64089:12;64063:11;;:39;;;;;;;;;;;;;;;;;;63551:558:::0;;;;;62874:4443;;19459:96;19512:7;19538:10;19531:17;;19459:96;:::o;22135:187::-;22208:16;22227:6;;;;;;;;;;;22208:25;;22252:8;22243:6;;:17;;;;;;;;;;;;;;;;;;22306:8;22275:40;;22296:8;22275:40;;;;;;;;;;;;22198:124;22135:187;:::o;7:75:1:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:102;621:6;672:2;668:7;663:2;656:5;652:14;648:28;638:38;;580:102;;;:::o;688:180::-;736:77;733:1;726:88;833:4;830:1;823:15;857:4;854:1;847:15;874:281;957:27;979:4;957:27;:::i;:::-;949:6;945:40;1087:6;1075:10;1072:22;1051:18;1039:10;1036:34;1033:62;1030:88;;;1098:18;;:::i;:::-;1030:88;1138:10;1134:2;1127:22;917:238;874:281;;:::o;1161:129::-;1195:6;1222:20;;:::i;:::-;1212:30;;1251:33;1279:4;1271:6;1251:33;:::i;:::-;1161:129;;;:::o;1296:308::-;1358:4;1448:18;1440:6;1437:30;1434:56;;;1470:18;;:::i;:::-;1434:56;1508:29;1530:6;1508:29;:::i;:::-;1500:37;;1592:4;1586;1582:15;1574:23;;1296:308;;;:::o;1610:246::-;1691:1;1701:113;1715:6;1712:1;1709:13;1701:113;;;1800:1;1795:3;1791:11;1785:18;1781:1;1776:3;1772:11;1765:39;1737:2;1734:1;1730:10;1725:15;;1701:113;;;1848:1;1839:6;1834:3;1830:16;1823:27;1672:184;1610:246;;;:::o;1862:434::-;1951:5;1976:66;1992:49;2034:6;1992:49;:::i;:::-;1976:66;:::i;:::-;1967:75;;2065:6;2058:5;2051:21;2103:4;2096:5;2092:16;2141:3;2132:6;2127:3;2123:16;2120:25;2117:112;;;2148:79;;:::i;:::-;2117:112;2238:52;2283:6;2278:3;2273;2238:52;:::i;:::-;1957:339;1862:434;;;;;:::o;2316:355::-;2383:5;2432:3;2425:4;2417:6;2413:17;2409:27;2399:122;;2440:79;;:::i;:::-;2399:122;2550:6;2544:13;2575:90;2661:3;2653:6;2646:4;2638:6;2634:17;2575:90;:::i;:::-;2566:99;;2389:282;2316:355;;;;:::o;2677:77::-;2714:7;2743:5;2732:16;;2677:77;;;:::o;2760:122::-;2833:24;2851:5;2833:24;:::i;:::-;2826:5;2823:35;2813:63;;2872:1;2869;2862:12;2813:63;2760:122;:::o;2888:143::-;2945:5;2976:6;2970:13;2961:22;;2992:33;3019:5;2992:33;:::i;:::-;2888:143;;;;:::o;3037:126::-;3074:7;3114:42;3107:5;3103:54;3092:65;;3037:126;;;:::o;3169:96::-;3206:7;3235:24;3253:5;3235:24;:::i;:::-;3224:35;;3169:96;;;:::o;3271:122::-;3344:24;3362:5;3344:24;:::i;:::-;3337:5;3334:35;3324:63;;3383:1;3380;3373:12;3324:63;3271:122;:::o;3399:143::-;3456:5;3487:6;3481:13;3472:22;;3503:33;3530:5;3503:33;:::i;:::-;3399:143;;;;:::o;3548:1323::-;3674:6;3682;3690;3698;3706;3755:3;3743:9;3734:7;3730:23;3726:33;3723:120;;;3762:79;;:::i;:::-;3723:120;3903:1;3892:9;3888:17;3882:24;3933:18;3925:6;3922:30;3919:117;;;3955:79;;:::i;:::-;3919:117;4060:74;4126:7;4117:6;4106:9;4102:22;4060:74;:::i;:::-;4050:84;;3853:291;4204:2;4193:9;4189:18;4183:25;4235:18;4227:6;4224:30;4221:117;;;4257:79;;:::i;:::-;4221:117;4362:74;4428:7;4419:6;4408:9;4404:22;4362:74;:::i;:::-;4352:84;;4154:292;4485:2;4511:64;4567:7;4558:6;4547:9;4543:22;4511:64;:::i;:::-;4501:74;;4456:129;4624:2;4650:64;4706:7;4697:6;4686:9;4682:22;4650:64;:::i;:::-;4640:74;;4595:129;4763:3;4790:64;4846:7;4837:6;4826:9;4822:22;4790:64;:::i;:::-;4780:74;;4734:130;3548:1323;;;;;;;;:::o;4877:99::-;4929:6;4963:5;4957:12;4947:22;;4877:99;;;:::o;4982:180::-;5030:77;5027:1;5020:88;5127:4;5124:1;5117:15;5151:4;5148:1;5141:15;5168:320;5212:6;5249:1;5243:4;5239:12;5229:22;;5296:1;5290:4;5286:12;5317:18;5307:81;;5373:4;5365:6;5361:17;5351:27;;5307:81;5435:2;5427:6;5424:14;5404:18;5401:38;5398:84;;5454:18;;:::i;:::-;5398:84;5219:269;5168:320;;;:::o;5494:141::-;5543:4;5566:3;5558:11;;5589:3;5586:1;5579:14;5623:4;5620:1;5610:18;5602:26;;5494:141;;;:::o;5641:93::-;5678:6;5725:2;5720;5713:5;5709:14;5705:23;5695:33;;5641:93;;;:::o;5740:107::-;5784:8;5834:5;5828:4;5824:16;5803:37;;5740:107;;;;:::o;5853:393::-;5922:6;5972:1;5960:10;5956:18;5995:97;6025:66;6014:9;5995:97;:::i;:::-;6113:39;6143:8;6132:9;6113:39;:::i;:::-;6101:51;;6185:4;6181:9;6174:5;6170:21;6161:30;;6234:4;6224:8;6220:19;6213:5;6210:30;6200:40;;5929:317;;5853:393;;;;;:::o;6252:60::-;6280:3;6301:5;6294:12;;6252:60;;;:::o;6318:142::-;6368:9;6401:53;6419:34;6428:24;6446:5;6428:24;:::i;:::-;6419:34;:::i;:::-;6401:53;:::i;:::-;6388:66;;6318:142;;;:::o;6466:75::-;6509:3;6530:5;6523:12;;6466:75;;;:::o;6547:269::-;6657:39;6688:7;6657:39;:::i;:::-;6718:91;6767:41;6791:16;6767:41;:::i;:::-;6759:6;6752:4;6746:11;6718:91;:::i;:::-;6712:4;6705:105;6623:193;6547:269;;;:::o;6822:73::-;6867:3;6822:73;:::o;6901:189::-;6978:32;;:::i;:::-;7019:65;7077:6;7069;7063:4;7019:65;:::i;:::-;6954:136;6901:189;;:::o;7096:186::-;7156:120;7173:3;7166:5;7163:14;7156:120;;;7227:39;7264:1;7257:5;7227:39;:::i;:::-;7200:1;7193:5;7189:13;7180:22;;7156:120;;;7096:186;;:::o;7288:543::-;7389:2;7384:3;7381:11;7378:446;;;7423:38;7455:5;7423:38;:::i;:::-;7507:29;7525:10;7507:29;:::i;:::-;7497:8;7493:44;7690:2;7678:10;7675:18;7672:49;;;7711:8;7696:23;;7672:49;7734:80;7790:22;7808:3;7790:22;:::i;:::-;7780:8;7776:37;7763:11;7734:80;:::i;:::-;7393:431;;7378:446;7288:543;;;:::o;7837:117::-;7891:8;7941:5;7935:4;7931:16;7910:37;;7837:117;;;;:::o;7960:169::-;8004:6;8037:51;8085:1;8081:6;8073:5;8070:1;8066:13;8037:51;:::i;:::-;8033:56;8118:4;8112;8108:15;8098:25;;8011:118;7960:169;;;;:::o;8134:295::-;8210:4;8356:29;8381:3;8375:4;8356:29;:::i;:::-;8348:37;;8418:3;8415:1;8411:11;8405:4;8402:21;8394:29;;8134:295;;;;:::o;8434:1395::-;8551:37;8584:3;8551:37;:::i;:::-;8653:18;8645:6;8642:30;8639:56;;;8675:18;;:::i;:::-;8639:56;8719:38;8751:4;8745:11;8719:38;:::i;:::-;8804:67;8864:6;8856;8850:4;8804:67;:::i;:::-;8898:1;8922:4;8909:17;;8954:2;8946:6;8943:14;8971:1;8966:618;;;;9628:1;9645:6;9642:77;;;9694:9;9689:3;9685:19;9679:26;9670:35;;9642:77;9745:67;9805:6;9798:5;9745:67;:::i;:::-;9739:4;9732:81;9601:222;8936:887;;8966:618;9018:4;9014:9;9006:6;9002:22;9052:37;9084:4;9052:37;:::i;:::-;9111:1;9125:208;9139:7;9136:1;9133:14;9125:208;;;9218:9;9213:3;9209:19;9203:26;9195:6;9188:42;9269:1;9261:6;9257:14;9247:24;;9316:2;9305:9;9301:18;9288:31;;9162:4;9159:1;9155:12;9150:17;;9125:208;;;9361:6;9352:7;9349:19;9346:179;;;9419:9;9414:3;9410:19;9404:26;9462:48;9504:4;9496:6;9492:17;9481:9;9462:48;:::i;:::-;9454:6;9447:64;9369:156;9346:179;9571:1;9567;9559:6;9555:14;9551:22;9545:4;9538:36;8973:611;;;8936:887;;8526:1303;;;8434:1395;;:::o;9835:169::-;9919:11;9953:6;9948:3;9941:19;9993:4;9988:3;9984:14;9969:29;;9835:169;;;;:::o;10010:232::-;10150:34;10146:1;10138:6;10134:14;10127:58;10219:15;10214:2;10206:6;10202:15;10195:40;10010:232;:::o;10248:366::-;10390:3;10411:67;10475:2;10470:3;10411:67;:::i;:::-;10404:74;;10487:93;10576:3;10487:93;:::i;:::-;10605:2;10600:3;10596:12;10589:19;;10248:366;;;:::o;10620:419::-;10786:4;10824:2;10813:9;10809:18;10801:26;;10873:9;10867:4;10863:20;10859:1;10848:9;10844:17;10837:47;10901:131;11027:4;10901:131;:::i;:::-;10893:139;;10620:419;;;:::o;62874:4443:0:-;;;;;;;'
}; // Your contract bytecode
// const initialSupply = 1000; // Initial supply for the token
export const abi = [
    {
        inputs: [
            {
                internalType: 'string',
                name: 'name',
                type: 'string'
            },
            {
                internalType: 'string',
                name: 'symbol',
                type: 'string'
            },
            {
                internalType: 'uint256',
                name: 'maxSupplyInit',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'initialRoyaltyPercentage',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: '_msgReceiver',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'approved',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'ApprovalForAll',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '_fromTokenId',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_toTokenId',
                type: 'uint256'
            }
        ],
        name: 'BatchMetadataUpdate',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '_tokenId',
                type: 'uint256'
            }
        ],
        name: 'MetadataUpdate',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                internalType: 'string',
                name: 'uri',
                type: 'string'
            }
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'RoyaltiesSet',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'baseTokenURI',
                type: 'string'
            }
        ],
        name: 'setBaseUri',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'newRoyaltyPercentage',
                type: 'uint256'
            }
        ],
        name: 'setRoyaltyPercentage',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newRoyaltyPercentage',
                type: 'uint256'
            }
        ],
        name: 'SetRoyaltyPercentage',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'newReceiver',
                type: 'address'
            }
        ],
        name: 'setRoyaltyReceiver',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'royaltyReceiver',
                type: 'address'
            }
        ],
        name: 'SetRoyaltyReceiver',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'newSupply',
                type: 'uint256'
            }
        ],
        name: 'setTotalSupply',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newSupply',
                type: 'uint256'
            }
        ],
        name: 'SetTotalSupply',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'Transfer',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: '_baseTokenURI',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: '_currentSupply',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: '_maxSupply',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'currentSupply',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'getApproved',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            }
        ],
        name: 'isApprovedForAll',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'msgReceiver',
        outputs: [
            {
                internalType: 'contract MSGReceiver',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'name',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'ownerOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'salePrice',
                type: 'uint256'
            }
        ],
        name: 'royaltyInfo',
        outputs: [
            {
                internalType: 'address',
                name: 'receiver',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'royaltyAmount',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'royaltyPercentage',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'royaltyReceiver',
        outputs: [
            {
                internalType: 'address payable',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4'
            }
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'tokenURI',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];

export const RECEIVER_CONTRACT_ABI = [
    {
        inputs: [
            {
                internalType: 'bool',
                name: '_transfer',
                type: 'bool'
            }
        ],
        name: 'enableAutotransfer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bool',
                name: '_transfer',
                type: 'bool'
            }
        ],
        name: 'EnableAutotransfer',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_mintPrice',
                type: 'uint256'
            }
        ],
        name: 'updateMintPrice',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '_mintPrice',
                type: 'uint256'
            }
        ],
        name: 'UpdateMintPrice',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_receiverWallet',
                type: 'address'
            }
        ],
        name: 'updateReceiverWallet',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_receiverWallet',
                type: 'address'
            }
        ],
        name: 'UpdateReceiverWallet',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            }
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            }
        ],
        name: 'Withdrawn',
        type: 'event'
    },
    {
        stateMutability: 'payable',
        type: 'receive'
    },
    {
        inputs: [],
        name: 'autoTransfer',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'mintPrice',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'receiverWallet',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];

export const LAND_NFT_ABI = [
    {
        inputs: [
            { internalType: 'string', name: '_name', type: 'string' },
            { internalType: 'string', name: '_symbol', type: 'string' },
            { internalType: 'uint256', name: '_mintPrice', type: 'uint256' },
            { internalType: 'uint256', name: '_mrMintPrice', type: 'uint256' },
            { internalType: 'uint256', name: '_startTokenId', type: 'uint256' },
            { internalType: 'address', name: '_mrToken', type: 'address' },
            { internalType: 'string', name: '_baseURL', type: 'string' },
            { internalType: 'address', name: '_revenueAddress', type: 'address' },
            { internalType: 'uint256', name: '_maxSupply', type: 'uint256' }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'approved', type: 'address' },
            { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
            { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
        ],
        name: 'ApprovalForAll',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'from', type: 'address' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' },
            { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'Transfer',
        type: 'event'
    },
    { inputs: [], name: 'MAX_SUPPLY', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [
            { internalType: 'uint256', name: '_qty', type: 'uint256' },
            { internalType: 'address', name: '_to', type: 'address' }
        ],
        name: 'adminMint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'baseExtension', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'baseURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'contract IERC20', name: 'erc20', type: 'address' }],
        name: 'clearStuckTokens',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
        name: 'exists',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'getApproved',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getMintPrice',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'operator', type: 'address' }
        ],
        name: 'isApprovedForAll',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_qty', type: 'uint256' },
            { internalType: 'address', name: '_to', type: 'address' }
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    { inputs: [], name: 'mintPrice', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [
            { internalType: 'uint256', name: '_qty', type: 'uint256' },
            { internalType: 'address', name: '_to', type: 'address' }
        ],
        name: 'mintWithMR',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    { inputs: [], name: 'mrMintPrice', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'mrToken', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'address[]', name: '_wallets', type: 'address[]' }],
        name: 'multiMint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    { inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'ownerOf',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [],
        name: 'revenueAddress',
        outputs: [{ internalType: 'address payable', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            { internalType: 'bytes', name: '_data', type: 'bytes' }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'operator', type: 'address' },
            { internalType: 'bool', name: 'approved', type: 'bool' }
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'string', name: '_newBaseURI', type: 'string' }],
        name: 'setBaseURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '_newPrice', type: 'uint256' }],
        name: 'setMRMintPrice',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '_mrToken', type: 'address' }],
        name: 'setMRToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '_newPrice', type: 'uint256' }],
        name: 'setMintPrice',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '_rAdd', type: 'address' }],
        name: 'setRevenueAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
        name: 'tokenByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'uint256', name: 'index', type: 'uint256' }
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
        name: 'tokensOfOwner',
        outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    { inputs: [], name: 'withdraw', outputs: [], stateMutability: 'payable', type: 'function' }
];

export const LAND_LAND_BSC_ABI = [
    {
        inputs: [
            { internalType: 'string', name: 'baseURI', type: 'string' },
            { internalType: 'contract IERC20', name: 'token_', type: 'address' },
            { internalType: 'string', name: 'mdata_', type: 'string' }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'approved', type: 'address' },
            { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
            { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
        ],
        name: 'ApprovalForAll',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'from', type: 'address' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' },
            { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'Transfer',
        type: 'event'
    },
    {
        inputs: [],
        name: 'MAX_PER_MINT',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'MAX_SUPPLY', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'PRICE', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'address', name: 'newAddress', type: 'address' }],
        name: 'addWhitelist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'baseTokenURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'claimTokens', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [],
        name: 'finalMintAmount',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'getApproved',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'operator', type: 'address' }
        ],
        name: 'isApprovedForAll',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'landSaleWallet',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'mdata', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'uint256', name: '_count', type: 'uint256' }],
        name: 'mint',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    { inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'openPresale', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'openPrivatesale', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'openPublicsale', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'ownerOf',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'presaleMintAmount',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'privateMintAmount',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'newAddress', type: 'address' }],
        name: 'removeWhitelist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            { internalType: 'bytes', name: '_data', type: 'bytes' }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'operator', type: 'address' },
            { internalType: 'bool', name: 'approved', type: 'bool' }
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'string', name: '_baseTokenURI', type: 'string' }],
        name: 'setBaseURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [],
        name: 'token',
        outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
        name: 'tokenByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'uint256', name: 'index', type: 'uint256' }
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
        name: 'tokensOfOwner',
        outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            { internalType: 'address', name: 'to', type: 'address' }
        ],
        name: 'transferNFT',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'string', name: 'mdata_', type: 'string' }],
        name: 'updateMDataName',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'newMintUpto', type: 'uint256' }],
        name: 'updateMintUpto',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'bool', name: 'privateSaleStatus', type: 'bool' },
            { internalType: 'bool', name: 'preSaleStatus', type: 'bool' },
            { internalType: 'bool', name: 'publicSaleStatus', type: 'bool' }
        ],
        name: 'updateOpenstatus',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'newPrice', type: 'uint256' }],
        name: 'updatePrices',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'contract IERC20', name: 'newToken_', type: 'address' }],
        name: 'updateToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address[]', name: 'addresses', type: 'address[]' }],
        name: 'updateWhitelist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'whitelists',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'withdraw', outputs: [], stateMutability: 'payable', type: 'function' }
];

export const MR_MESTERY_NFT = [
    { inputs: [{ internalType: 'string', name: 'baseURI', type: 'string' }], stateMutability: 'nonpayable', type: 'constructor' },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'approved', type: 'address' },
            { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
            { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
        ],
        name: 'ApprovalForAll',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'from', type: 'address' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' },
            { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'Transfer',
        type: 'event'
    },
    {
        inputs: [],
        name: 'MAX_PER_MINT',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'MAX_SUPPLY', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'PRICE', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'baseTokenURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [],
        name: 'founderAddress',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'getApproved',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'operator', type: 'address' }
        ],
        name: 'isApprovedForAll',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '_count', type: 'uint256' }],
        name: 'mintNFTs',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    { inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'ownerOf',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            { internalType: 'bytes', name: '_data', type: 'bytes' }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'operator', type: 'address' },
            { internalType: 'bool', name: 'approved', type: 'bool' }
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'string', name: '_baseTokenURI', type: 'string' }],
        name: 'setBaseURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
        name: 'tokenByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'uint256', name: 'index', type: 'uint256' }
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
        name: 'tokensOfOwner',
        outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            { internalType: 'address', name: 'to', type: 'address' }
        ],
        name: 'transferNFT',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'newWallet', type: 'address' }],
        name: 'updateFounderWallet',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: '_newPrice', type: 'uint256' }],
        name: 'updatePrice',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    { inputs: [], name: 'withdraw', outputs: [], stateMutability: 'payable', type: 'function' }
];

export const FACTORY_CONTRACT_ABI = [
    { inputs: [{ internalType: 'address', name: '_feeReceiverAddress', type: 'address' }], stateMutability: 'nonpayable', type: 'constructor' },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'collectionAddress', type: 'address' },
            { indexed: true, internalType: 'address', name: 'ownerAddress', type: 'address' }
        ],
        name: 'NFTCollectionCreated',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        inputs: [
            { internalType: 'string', name: 'name', type: 'string' },
            { internalType: 'string', name: 'symbol', type: 'string' },
            { internalType: 'uint256', name: 'maxSupplyInit', type: 'uint256' },
            { internalType: 'uint256', name: 'initialRoyaltyPercentage', type: 'uint256' },
            { internalType: 'address', name: 'nftCollectionOwner', type: 'address' }
        ],
        name: 'createNFTCollection',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    { inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [{ internalType: 'address', name: '_feeAddress', type: 'address' }],
        name: 'setFeeReceiverAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];

export const CLAIM_CONTRACT_ABI = [
    { inputs: [{ internalType: 'address', name: 'rewardToken', type: 'address' }], stateMutability: 'nonpayable', type: 'constructor' },
    {
        anonymous: false,
        inputs: [{ indexed: false, internalType: 'uint256', name: '_currentIndex', type: 'uint256' }],
        name: 'CurrentIndex',
        type: 'event'
    },
    { anonymous: false, inputs: [{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'Deposit', type: 'event' },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'account', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        name: 'DistributionIncomplete',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'shareholder', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        name: 'SetShare',
        type: 'event'
    },
    {
        inputs: [],
        name: 'REWARD',
        outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: '_token', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'address', name: 'shareHolder', type: 'address' }],
        name: 'claimDividend',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'currentIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'dividendsPerShare',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'dividendsPerShareAccuracyFactor',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'holder', type: 'address' }],
        name: 'getHolderDetails',
        outputs: [
            { internalType: 'uint256', name: 'lastClaim', type: 'uint256' },
            { internalType: 'uint256', name: 'unpaidEarning', type: 'uint256' },
            { internalType: 'uint256', name: 'totalReward', type: 'uint256' },
            { internalType: 'uint256', name: 'holderIndex', type: 'uint256' }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getNumberOfTokenHolders',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getShareHoldersList',
        outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'shareholder', type: 'address' }],
        name: 'getUnpaidEarnings',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'minDistribution',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'minPeriod', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    {
        inputs: [{ internalType: 'uint256', name: 'gas', type: 'uint256' }],
        name: 'process',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: 'receiver', type: 'address' }],
        name: 'purge',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_minPeriod', type: 'uint256' },
            { internalType: 'uint256', name: '_minDistribution', type: 'uint256' }
        ],
        name: 'setDistributionCriteria',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            { internalType: 'address', name: 'shareholder', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' }
        ],
        name: 'setShare',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'shares',
        outputs: [
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
            { internalType: 'uint256', name: 'totalExcluded', type: 'uint256' },
            { internalType: 'uint256', name: 'totalRealised', type: 'uint256' }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalDistributed',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalDividends',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    { inputs: [], name: 'totalShares', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }
];
