"use client";
import { client } from "../src/app/client";
import { upload, download } from "thirdweb/storage";
import axios from "axios";
import { BigNumber } from "ethers";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useActiveAccount } from "thirdweb/react";
import { USDTAbi } from "../abi/USDTAbi";
import { APIConfig } from "../abi/APIConfiguration";

//获取登录后的钱包地址
// const account: any = useActiveAccount();
// 使用私钥创建钱包，并连接到 provider
//   const provider = new ethers.providers.JsonRpcProvider(BSC_RPC_URL);
// BNB 网络的 RPC URL
const BSC_RPC_URL = "https://97.rpc.thirdweb.com/";
// Thirdweb API 密钥
const clientId = "e32faf2a9ce284ff3a3e3f80ef0f6d6b";
// 钱包私钥
const PRIVATE_KEY =
  "5335af82ac2487520bc454887ad8fa9553650b182c9ad4194672819cd0068057";

/**
 * 连接钱包获取web3sdk
 *  @param  address - 合约地址
 *  @param  abi - abi合约文件
 */
export const getContract = async (address: any, abi: any) => {
  // 从浏览器获取钱包
  const { ethereum } = window as any;

  const wallet = new ethers.providers.Web3Provider(ethereum);
  const signer = wallet.getSigner();
  // 创建 SDK 实例，并传入签名者
  const sdk = new ThirdwebSDK(signer, { clientId });

  const provider = sdk.getProvider(); // 获取 provider
  const network = await provider.getNetwork(); // 使用 ethers.js 获取网络信息
  console.log("实例，并传入签名者:", signer, ethereum);
  // 获取钱包地址
  const walletAddress = await signer.getAddress();
  console.log("钱包地址:", walletAddress);
  console.log("当前连接的链ID:", network.chainId); // 输出链ID
  // 获取合约实例
  return await sdk.getContract(address, abi);
};

export const getContract2 = async (address: any, abi: any) => {
  const { ethereum } = window as any;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(address, abi, signer);
};

//图片上传
export const uploadData = (imgurl: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      // 去除前缀
      const base64Data = imgurl.replace(/^data:image\/[a-z]+;base64,/, "");

      // 将 base64 字符串转换为 Blob 对象
      const byteChars = atob(base64Data.replace(/\s/g, ""));
      const byteNumbers = Array.from(byteChars, (char) => char.charCodeAt(0));
      const byteArray = new Uint8Array(byteNumbers);
      const imageBlob = new Blob([byteArray], { type: "image/png" });

      // 创建一个 File 对象
      const file = new File([imageBlob], "image.png", { type: "image/png" });

      // 上传图片
      const uri = await upload({
        client, // thirdweb client
        files: [file],
      });

      // 下载图片
      const url = await download({
        client,
        uri,
      });

      // 返回结果
      resolve(url.url);
    } catch (error) {
      // 错误处理
      reject(error);
    }
  });
};

//

/**
 * Cloudflare post存数据 params
 * @param {string|number} params.key
 * @param {any} params.value
 */
export const postData = (params: any) => {
  return new Promise((resolve, reject) => {
    const url = "https://api.bns.ink/";
    axios
      .post(url, params)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Cloudflare get取数据
 * @param {string|number} key
 */
export const getData = (key: any) => {
  return new Promise((resolve, reject) => {
    const url = `https://api.bns.ink/?key=${key}`;
    axios
      .get(url)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * 格式化数据
 */
export const beautifyData = (data: any, mergeDate: any) => {
  const dataArray = [
    BigNumber.from(data["index"]),
    data["isopen"],
    data["nodeAddress"],
    BigNumber.from(data["nodeindex"]),
    BigNumber.from(data["stakeAmount"]),
    BigNumber.from(data["time"]),
    BigNumber.from(data["votingAmount"]),
  ];
  const dataObject = {
    index: dataArray[0].toString(), //社区标识  0/1 大/小社区
    isopen: dataArray[1], //是否在列表展示
    nodeAddress: dataArray[2].toString(), //社区长钱包地址
    nodeindex: dataArray[3].toString(), // key 唯一值
    stakeAmount: dataArray[4].toString(), //质押数量
    time: dataArray[5].toString(), //创建时间
    votingAmount: dataArray[6].toString(), //社区投票数量
  };
  return Object.assign(
    dataObject,
    mergeDate != "Default value" ? JSON.parse(mergeDate) : {}
  );
};

/**
 * 格式化数据
 */
export const beautifyDataVote = (data: any, address: any) => {
  const dataArray = [
    BigNumber.from(data["amount"]),
    BigNumber.from(data["time"]),
  ];
  const dataObject = {
    voteNum: dataArray[0].toString(), //投票数量
    time: dataArray[1].toString(), //创建时间
  };
  return Object.assign(dataObject, {
    address: address,
  });
};

/**
 * 格式化时间
 */
export const formatTimestamp = (timestamp: any) => {
  // 创建一个新的 Date 对象，并将秒转换为毫秒
  const date = new Date(timestamp * 1000);

  // 获取 UTC 时间的毫秒数并加上 8 小时（28800000 毫秒）以转换为北京时间
  const beijingDate = new Date(date.getTime() + 8 * 60 * 60 * 1000);

  // 获取年、月、日、小时、分钟和秒
  const year = beijingDate.getUTCFullYear();
  const month = beijingDate.getUTCMonth() + 1; // 月份从 0 开始，所以要加 1
  const day = beijingDate.getUTCDate();
  const hours = beijingDate.getUTCHours();
  const minutes = beijingDate.getUTCMinutes();
  const seconds = beijingDate.getUTCSeconds();

  // 格式化为 YYYY-MM-DD HH:mm:ss
  return `${year.toString().padStart(4, "0")}-${month
    .toString()
    .padStart(2, "0")}-${day.toString().padStart(2, "0")} ${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
};

/**
 * 去掉18个0
 */
export const formatWei = (bigNumberValue: any = 0) => {
  return ethers.utils.formatUnits(bigNumberValue, 18);
};

/**
 * 数据过滤
 */
export const filterAddress = (address: string) => {
  // 示例用法
  const targetAddresses = ["0xBCde45d4244c00ec635cD5b06fB52BEcdC5b63Ae"];
  return !targetAddresses
    .map((addr) => addr.toLowerCase())
    .includes(address.toLowerCase());
};

/**
 * 查询币种余额  type = 0
 * 查询是否授权  type = 1
 */
export const getTokenBalance = async (address: string, type: number = 0) => {

  // BNB 测试网的 RPC URL
  const bnbTestnetRpcUrl = "https://data-seed-prebsc-1-s1.binance.org:8545/";

  // 创建Provider实例
  const provider = new ethers.providers.JsonRpcProvider(bnbTestnetRpcUrl);
  const walletAddress = address;
  const tokenContract = new ethers.Contract(
    APIConfig.BUSDaddress,
    USDTAbi,
    provider
  );
  // 获取代币余额
  const balance = await tokenContract.balanceOf(walletAddress);

  // 获取授权数量
  const allowance = await tokenContract.allowance(
    address,
    APIConfig.ETHAddress
  );

  // 获取代币的 decimals 属性
  const decimals = await tokenContract.decimals();

  // 调整授权数量为可读格式

  // 可选：获取代币的符号
  const symbol = await tokenContract.symbol();

  if (type === 0) {
    // 币种余额
    const tokenBalance = ethers.utils.formatUnits(balance, decimals);
    return tokenBalance;
  } else {
    // 授权余额
    const adjustedAllowance = ethers.utils.formatUnits(allowance, decimals);
    return adjustedAllowance;
  }
};
