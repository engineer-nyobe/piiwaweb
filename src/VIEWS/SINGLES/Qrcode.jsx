import React, { useState } from "react";
import QRCode from "react-qr-code";

const initialState = {
  phoneSender: 656201002,
  amount: 50,
};

function Qrcode() {
  const [datacode, setDatacode] = useState(initialState);
  const { phoneSender, amount } = datacode;
  const StringData = JSON.stringify(datacode);

  return (
    <div>
      <QRCode
        value={StringData}
        style={{ height: "auto", width: "100%", width: "10%" }}
        viewBox={`0 0 256 256`}
        size={256}
      />
      <div>
        <input
          type="number"
          value={phoneSender}
          onChange={(e) =>
            setDatacode({ ...datacode, phoneSender: e.target.value })
          }
          placeholder="phone sender"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setDatacode({ ...datacode, amount: e.target.value })}
          placeholder="amount"
        />
      </div>
    </div>
  );
}

export default Qrcode;
