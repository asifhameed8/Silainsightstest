import React from 'react';
import { Token, TokenMedia, /* useTokens, */ useUserTokens } from '@reservoir0x/reservoir-kit-ui';
import useMarketplaceChain from '@hooks/useMarketplaceChain';
import ChainFlow from '@components/ChainFlow.tsx';
import HideTokenButton from '@components/buttons/HideButton';
import TableLoader from '@components/TableLoader';
import { GET_HIDDEN_TOKENS } from 'src/graphql/tokens';
import { useQuery } from '@apollo/client';
import { Address } from 'wagmi';
import NoItemFound from '@components/NoItemFound';
// import { userSelector } from 'src/store/selectors';
// import { useSelector } from 'react-redux';

const ListViewHeadings =
    'px-2 py-3 text-xs tracking-wider font-semibold whitespace-nowrap text-center text-lightText text-black dark:text-white uppercase';
const ListViewItems = 'px-2 py-2 whitespace-nowrap text-center text-xs';

const HiddenTokensTable = ({ user, address, isOwner }) => {
    // const user = useSelector(userSelector);

    const { data, refetch, loading } = useQuery(GET_HIDDEN_TOKENS, {
        variables: {
            userId: user?._id
        },
        skip: !user
    });

    const hiddenTokens = data?.hiddenTokens;

    const { data: tokens } = useUserTokens(address, { tokens: hiddenTokens?.map((item: any) => `${item?.contract}:${item?.tokenId}`) });

    return (
        <div className="overflow-x-auto rounded border border-lightBorder dark:border-borderColor">
            <div className="inline-block min-w-full align-middle ">
                <div className="AtScrollHide relative h-[20rem] overflow-auto rounded bg-white dark:bg-transparent sm:h-[40rem]">
                    <table className=" min-w-full  rounded ">
                        <thead className="sticky top-0 !z-10 h-[3rem] border-b border-lightBorder bg-lightBg dark:border-borderColor dark:bg-gray17 md:h-[3.3rem] ">
                            <tr>
                                <th scope="col" className={`${ListViewHeadings}`}>
                                    Chain
                                </th>

                                <th scope="col" className={`${ListViewHeadings} !text-left`}>
                                    NFT
                                </th>
                                <th scope="col" className={`${ListViewHeadings} !text-left`}>
                                    NFT Name
                                </th>

                                <th scope="col" className={`${ListViewHeadings} pr-6`}>
                                    id
                                </th>
                                <th scope="col" className={`${ListViewHeadings} pr-6`}>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-lightBorder dark:divide-[#727279]">
                            {tokens?.length == 0 && <NoItemFound text="No Collection" />}
                            {tokens?.map((token, idx) => (
                                <TableRow token={token} key={idx} mutate={refetch} address={address} isOwner={isOwner} />
                            ))}

                            {loading && <TableLoader />}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HiddenTokensTable;

interface IProps {
    token?: Token;
    mutate: Function;
    address: Address;
    isOwner: boolean;
}

const TableRow = ({ token, mutate, /*  address, */ isOwner }: IProps) => {
    const chain = useMarketplaceChain();
    return (
        <tr className={`AtParent cursor-pointer bg-transparent  text-black hover:bg-lightHover dark:text-white dark:hover:bg-dark`}>
            <td className={`${ListViewItems} relative`}>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <ChainFlow />
                </div>
            </td>
            <td className={ListViewItems}>
                <div className="h-6 w-6">
                    <TokenMedia
                        token={token?.token}
                        videoOptions={{ autoPlay: true, muted: true }}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 4,
                            overflow: 'hidden'
                        }}
                        className=" object-cover"
                    />
                </div>
            </td>
            <td className={`${ListViewItems} !text-left`}>{token?.token?.collection?.name}</td>
            <td className={ListViewItems}>#{token?.token?.tokenId}</td>
            <td className={ListViewItems}>
                <div>
                    <HideTokenButton
                        className="relative"
                        contract={token?.token?.contract}
                        chain={chain?.routePrefix}
                        tokenId={token?.token?.tokenId}
                        mutate={mutate}
                        isOwner={isOwner}
                        hiddenIcon
                    />
                </div>
            </td>
        </tr>
    );
};
