`createrawtransaction '[{"txid": "e2d49f3879fe748c967195f3d371af89f75fe29b8cb763b423986f5a88df0591", "vout":1}]' '{"tb1qvpsd5t0fc2ckmugnzdew789c89fapl0cvay226":0.0001, "tb1qvp4dh9dawgg502z90uzglkgtr80ya3sm68j3dw":0.00059}'`

Output:

> 02000000019105df885a6f9823b463b78c9be25ff789af71d3f39571968c74fe79389fd4e20100000000ffffffff0210270000000000001600146060da2de9c2b16df1131372ef1cb83953d0fdf878e6000000000000160014606adb95bd721147a8457f048fd90b19de4ec61b00000000

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
