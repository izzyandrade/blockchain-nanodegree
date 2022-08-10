##### Creating Raw Transactions

To create a raw transaction, run the following command (adapting the parameters):

`createrawtransaction '[{"txid": "e2d49f3879fe748c967195f3d371af89f75fe29b8cb763b423986f5a88df0591", "vout":1}]' '{"tb1qvpsd5t0fc2ckmugnzdew789c89fapl0cvay226":0.0001, "tb1qvp4dh9dawgg502z90uzglkgtr80ya3sm68j3dw":0.00059}'`

Output:

> 02000000019105df885a6f9823b463b78c9be25ff789af71d3f39571968c74fe79389fd4e20100000000ffffffff0210270000000000001600146060da2de9c2b16df1131372ef1cb83953d0fdf878e6000000000000160014606adb95bd721147a8457f048fd90b19de4ec61b00000000

##### Decoding Raw Transactions

To decode a raw transaction, run the following command (adapting the hexstring):

`decoderawtransaction 02000000019105df885a6f9823b463b78c9be25ff789af71d3f39571968c74fe79389fd4e20100000000ffffffff0210270000000000001600146060da2de9c2b16df1131372ef1cb83953d0fdf878e6000000000000160014606adb95bd721147a8457f048fd90b19de4ec61b00000000`

Output:
￼

```
{
  "txid": "df54abb398de8530db11f5d1d6716ab22f72995dbed67a0033ebe015c426b291",
  "hash": "df54abb398de8530db11f5d1d6716ab22f72995dbed67a0033ebe015c426b291",
  "version": 2,
  "size": 113,
  "vsize": 113,
  "weight": 452,
  "locktime": 0,
  "vin": [
    {
      "txid": "e2d49f3879fe748c967195f3d371af89f75fe29b8cb763b423986f5a88df0591",
      "vout": 1,
      "scriptSig": {
        "asm": "",
        "hex": ""
      },
      "sequence": 4294967295
    }
  ],
  "vout": [
    {
      "value": 0.00010000,
      "n": 0,
      "scriptPubKey": {
        "asm": "0 6060da2de9c2b16df1131372ef1cb83953d0fdf8",
        "desc": "addr(tb1qvpsd5t0fc2ckmugnzdew789c89fapl0cvay226)#vqy8meq2",
        "hex": "00146060da2de9c2b16df1131372ef1cb83953d0fdf8",
        "address": "tb1qvpsd5t0fc2ckmugnzdew789c89fapl0cvay226",
        "type": "witness_v0_keyhash"
      }
    },
    {
      "value": 0.00059000,
      "n": 1,
      "scriptPubKey": {
        "asm": "0 606adb95bd721147a8457f048fd90b19de4ec61b",
        "desc": "addr(tb1qvp4dh9dawgg502z90uzglkgtr80ya3sm68j3dw)#47zvu68g",
        "hex": "0014606adb95bd721147a8457f048fd90b19de4ec61b",
        "address": "tb1qvp4dh9dawgg502z90uzglkgtr80ya3sm68j3dw",
        "type": "witness_v0_keyhash"
      }
    }
  ]
}
```

##### Signing Raw Transactions

To sign a raw transaction, run the following command (adapting the hexstring):

```
signrawtransactionwithwallet 02000000019105df885a6f9823b463b78c9be25ff789af71d3f39571968c74fe79389fd4e20100000000ffffffff0210270000000000001600146060da2de9c2b16df1131372ef1cb83953d0fdf878e6000000000000160014606adb95bd721147a8457f048fd90b19de4ec61b00000000
```

Output:

```
{
  "hex": "020000000001019105df885a6f9823b463b78c9be25ff789af71d3f39571968c74fe79389fd4e20100000000ffffffff0210270000000000001600146060da2de9c2b16df1131372ef1cb83953d0fdf878e6000000000000160014606adb95bd721147a8457f048fd90b19de4ec61b02473044022029b6b36aba95679e7a7e7435ffd8614700da92d50fa701328d2439c935abcc5702206997613931340c8a97a3d074bc85432064a494106f49451366fedcf1b1397f5c0121035db261690559396f162a9a913793d1fcce1e493f3a1cd68e8a5b9d7b579ada9400000000",
  "complete": true
}
```

Then you can run decoderawtransaction again to see the same transaction now signed (scriptSig field is filled)

##### Sending Raw Transactions

To send raw transactions to the network, use the following command:

`sendrawtransaction "hex"`

With "hex" being the hex string returned when the transaction was signed.

Output:

> df54abb398de8530db11f5d1d6716ab22f72995dbed67a0033ebe015c426b291

##### Verifying sent transaction

To verify everything went well, just query the hex from the last result (hex of the created transaction)

`gettransaction df54abb398de8530db11f5d1d6716ab22f72995dbed67a0033ebe015c426b291`

Output should be a valid transaction with all operations done in the raw transaction.
Wallet value should be updated.
