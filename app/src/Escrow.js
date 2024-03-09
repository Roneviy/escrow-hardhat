import { ethers } from 'ethers';
export default function Escrow({
  address,
  arbiter,
  beneficiary,
  value,
  handleApprove,
  handleDecline

}) {
  return (
    <div className="existing-contract">
      <ul className="fields">
        <li>
          <div> Arbiter </div>
          <div> {arbiter} </div>
        </li>
        <li>
          <div> Beneficiary </div>
          <div> {beneficiary} </div>
        </li>
        <li>
          <div> Value </div>
          <div> {ethers.utils.formatEther(value)} ETH </div>
        </li>
        <div
          className="button-approve"
          id={address}
          onClick={(e) => {
            e.preventDefault();

            handleApprove();
          }}
        >
          Approve
        </div>
        <div 
        className="button-decline"
        id={address}
        onClick={(e) => {
          e.preventDefault();
          handleDecline();
        }}
        >
          Decline
        </div>
      </ul>
    </div>
  );
}