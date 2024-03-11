import { ethers } from 'ethers';
import { useState } from 'react';

export default function Escrow({
  arbiter,
  beneficiary,
  value,
  handleApprove,
  handleDecline,
}) {
  const [isApproved, setIsApproved] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);

  const handleClick = async (action) => {
    if (action === 'approve') {
      await handleApprove();
      setIsApproved(true);
    } else if (action === 'decline') {
      await handleDecline();
      setIsDeclined(true);
    }
  };

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
        {!isApproved && !isDeclined && (
          <>
            <button
              className="button-approve"
              onClick={() => handleClick('approve')}
            >
              Approve
            </button>
            <button
              className="button-decline"
              onClick={() => handleClick('decline')}
            >
              Decline
            </button>
          </>
        )}
        {isApproved && (
          <div className="approved-text">
            ✓ It's been approved!
          </div>
        )}
        {isDeclined && (
          <div className="declined-text">
            ✗ It's been declined!
          </div>
        )}
      </ul>
    </div>
  );
}
