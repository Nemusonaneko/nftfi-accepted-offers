import { LoanStarted as LoanStartedEvent } from "../generated/DirectLoanFixedOfferRedeploy/DirectLoanFixedOfferRedeploy";
import { LoanStarted, NFT } from "../generated/schema";

// export function handleLoanStarted(event: LoanStartedEvent): void {
//   let entity = new LoanStarted(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.loanId = event.params.loanId
//   entity.borrower = event.params.borrower
//   entity.lender = event.params.lender
//   entity.loanTerms_loanPrincipalAmount =
//     event.params.loanTerms.loanPrincipalAmount
//   entity.loanTerms_maximumRepaymentAmount =
//     event.params.loanTerms.maximumRepaymentAmount
//   entity.loanTerms_nftCollateralId = event.params.loanTerms.nftCollateralId
//   entity.loanTerms_loanERC20Denomination =
//     event.params.loanTerms.loanERC20Denomination
//   entity.loanTerms_loanDuration = event.params.loanTerms.loanDuration
//   entity.loanTerms_loanInterestRateForDurationInBasisPoints =
//     event.params.loanTerms.loanInterestRateForDurationInBasisPoints
//   entity.loanTerms_loanAdminFeeInBasisPoints =
//     event.params.loanTerms.loanAdminFeeInBasisPoints
//   entity.loanTerms_nftCollateralWrapper =
//     event.params.loanTerms.nftCollateralWrapper
//   entity.loanTerms_loanStartTime = event.params.loanTerms.loanStartTime
//   entity.loanTerms_nftCollateralContract =
//     event.params.loanTerms.nftCollateralContract
//   entity.loanTerms_borrower = event.params.loanTerms.borrower
//   entity.loanExtras_revenueSharePartner =
//     event.params.loanExtras.revenueSharePartner
//   entity.loanExtras_revenueShareInBasisPoints =
//     event.params.loanExtras.revenueShareInBasisPoints
//   entity.loanExtras_referralFeeInBasisPoints =
//     event.params.loanExtras.referralFeeInBasisPoints

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

export function handleLoanStarted(event: LoanStartedEvent): void {
  let entity = new LoanStarted(event.transaction.hash.toHexString());
  let nft = NFT.load(
    event.params.loanTerms.nftCollateralContract.toHexString()
  );
  if (!nft) {
    nft = new NFT(event.params.loanTerms.nftCollateralContract.toHexString());
    nft.address = event.params.loanTerms.nftCollateralContract;
  }
  entity.nft = nft.id;
  entity.loanId = event.params.loanId;
  entity.collateralId = event.params.loanTerms.nftCollateralId;
  entity.token = event.params.loanTerms.loanERC20Denomination;
  entity.lender = event.params.lender;
  entity.borrower = event.params.borrower;
  entity.principal = event.params.loanTerms.loanPrincipalAmount;
  entity.maxRepayment = event.params.loanTerms.maximumRepaymentAmount;
  entity.loanDuration = event.params.loanTerms.loanDuration;
  entity.loanInterestRate =
    event.params.loanTerms.loanInterestRateForDurationInBasisPoints;
  entity.adminFee = event.params.loanTerms.loanAdminFeeInBasisPoints;
  entity.loanStart = event.params.loanTerms.loanStartTime;
  entity.revenueSharePartner = event.params.loanExtras.revenueSharePartner;
  entity.revenueShare = event.params.loanExtras.revenueShareInBasisPoints;
  entity.referralFee = event.params.loanExtras.referralFeeInBasisPoints;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.txHash = event.transaction.hash;

  nft.save();
  entity.save();
}
