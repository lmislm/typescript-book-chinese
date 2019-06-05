/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "97d643dfa26ec1df4e3e7cacdbbd10b0"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.f5389cb8.js",
    "revision": "6f2c3cfd2bb6a2891961030c97c141c8"
  },
  {
    "url": "assets/js/12.4fca7fe7.js",
    "revision": "1d18a48ebae2b7b1527a793dedbb042c"
  },
  {
    "url": "assets/js/13.a38bae57.js",
    "revision": "d204b05473b845efacda91f489813acd"
  },
  {
    "url": "assets/js/14.ff09e74e.js",
    "revision": "1158a03217f155355fb2e49698a4c4fb"
  },
  {
    "url": "assets/js/15.140a4a49.js",
    "revision": "aeb933495ef1c93e0e576ce361873578"
  },
  {
    "url": "assets/js/16.f7c33f85.js",
    "revision": "119e378f767d2dad47fea3be040c45ae"
  },
  {
    "url": "assets/js/17.1621d6f8.js",
    "revision": "17f73096b46c66eba74807e4328775f1"
  },
  {
    "url": "assets/js/18.9c85fc21.js",
    "revision": "7d38c6a53e9f9f5d76b2f00a0a3bf992"
  },
  {
    "url": "assets/js/19.31ce180d.js",
    "revision": "4b573c3f3008aba2d564252d1a5e5bfc"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.e4d493ab.js",
    "revision": "11d910c8977dd4f058ee1d04d39365a1"
  },
  {
    "url": "assets/js/21.b9c83e85.js",
    "revision": "b921ec291f9a0592da5243f3a639001f"
  },
  {
    "url": "assets/js/22.44054224.js",
    "revision": "d5469f60a8a1e2c439858a74ce50a21d"
  },
  {
    "url": "assets/js/23.7a2ca6d4.js",
    "revision": "c6fe347412202e4d06bfa0f0cf653053"
  },
  {
    "url": "assets/js/24.89b522f3.js",
    "revision": "6ba8042970fb1929984d0096c8a894d4"
  },
  {
    "url": "assets/js/25.730c5e9c.js",
    "revision": "b37b1d80121ef221b207827a3fc19f88"
  },
  {
    "url": "assets/js/26.c7672d79.js",
    "revision": "bdbc563ccdda372848e0b8f5ee9db191"
  },
  {
    "url": "assets/js/27.b605021b.js",
    "revision": "57a9f2b1a9b035b19230f3cfbf583030"
  },
  {
    "url": "assets/js/28.f2b64488.js",
    "revision": "5b53080965cab7797eeea6ea192a726c"
  },
  {
    "url": "assets/js/29.a5cbd2c2.js",
    "revision": "285d6d716d1f68fbf397701616834095"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.0a2b88b3.js",
    "revision": "d33d747abe2f955fd46343650b92bd3d"
  },
  {
    "url": "assets/js/31.ad4777a3.js",
    "revision": "093ad2b6c1a83c2d8c2d92d0ab728437"
  },
  {
    "url": "assets/js/32.22277329.js",
    "revision": "4570baf59b309f7ffeca34abddffcb82"
  },
  {
    "url": "assets/js/33.2bd91d60.js",
    "revision": "ae141187160f2f1f6d232aecde6a476a"
  },
  {
    "url": "assets/js/34.9d9b74a1.js",
    "revision": "6b880e82f84b38fc877f84217f18798a"
  },
  {
    "url": "assets/js/35.17c7c661.js",
    "revision": "896cee5a7a2f02f74d9f6c512a8058a0"
  },
  {
    "url": "assets/js/36.ddc6792a.js",
    "revision": "a8c8221b0c4b5d3fdc0ecf1555358da4"
  },
  {
    "url": "assets/js/37.9a1b9c17.js",
    "revision": "9eb5bd2df356d36fd37d1723b251d4ad"
  },
  {
    "url": "assets/js/38.efc8dc29.js",
    "revision": "385fea7117f605ddcf442776ce4951a6"
  },
  {
    "url": "assets/js/39.92498efe.js",
    "revision": "2944efe25d7c09d3f6b41edf4ec10607"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.08fe56d7.js",
    "revision": "9e749394e0f0e2123e95ab84e6697bf9"
  },
  {
    "url": "assets/js/41.f29edd91.js",
    "revision": "afba91222b6a57fb745a4973af49ef52"
  },
  {
    "url": "assets/js/42.d4650052.js",
    "revision": "da2ff0fdf0b3e532890cd1fdb56f1b62"
  },
  {
    "url": "assets/js/43.cc1cb452.js",
    "revision": "21791942398bde80696778d1b31274a9"
  },
  {
    "url": "assets/js/44.f11c8659.js",
    "revision": "7eac8b651bc6cafe458b6ba5e6650648"
  },
  {
    "url": "assets/js/45.1ab32539.js",
    "revision": "afee79d4afd6475763b5e8c522f5de81"
  },
  {
    "url": "assets/js/46.1a051801.js",
    "revision": "50187ce80d3c1e4d7b17c48c089f7e1a"
  },
  {
    "url": "assets/js/47.422b60b2.js",
    "revision": "a4112a54482e5bc12597fbfb8b7721dd"
  },
  {
    "url": "assets/js/48.0db5ef80.js",
    "revision": "e71cefaf28bd5bcb55359912fde4d288"
  },
  {
    "url": "assets/js/49.53b82d7e.js",
    "revision": "35d7146f973dc092afb47cec7dc53e40"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.b3078f78.js",
    "revision": "76557ba48801a11313e9183f383b4083"
  },
  {
    "url": "assets/js/51.9b7bd61f.js",
    "revision": "5143ff0be37f12c45f2cfee97e42488b"
  },
  {
    "url": "assets/js/52.8015841f.js",
    "revision": "83744ae24e3b59eaa5548ea2f8bd965e"
  },
  {
    "url": "assets/js/53.e76a4334.js",
    "revision": "7e007a784d4528f947280794ece03022"
  },
  {
    "url": "assets/js/54.eb82f221.js",
    "revision": "14bb00cb2ff91062b99f4d78c6caecaf"
  },
  {
    "url": "assets/js/55.5d6220ee.js",
    "revision": "1e89784b0dbfc112863c3006e79a58a9"
  },
  {
    "url": "assets/js/56.86072289.js",
    "revision": "c518ae6467fb8f21b9483e6a8ff47a3d"
  },
  {
    "url": "assets/js/57.3403c17b.js",
    "revision": "03091c942bfea3859d1e2b31a73658ea"
  },
  {
    "url": "assets/js/58.ee44192b.js",
    "revision": "62fdcd9dfa58f99e3c08586b561167aa"
  },
  {
    "url": "assets/js/59.34caea1f.js",
    "revision": "d1102bd94d899993c75e750f801ab1a2"
  },
  {
    "url": "assets/js/6.6fde3483.js",
    "revision": "baa738afd6a7d334a3e48d1f70c610ff"
  },
  {
    "url": "assets/js/60.4c3395e1.js",
    "revision": "cde876cc6339b177d1f3c9281c9ce735"
  },
  {
    "url": "assets/js/61.0a534de4.js",
    "revision": "37a106805aae7776181ca3cbcf7e2270"
  },
  {
    "url": "assets/js/62.d0a7dbdf.js",
    "revision": "91aae2b7a58dcc2cd61072cd2ad50a55"
  },
  {
    "url": "assets/js/63.01d99200.js",
    "revision": "0c466faf654d7bc4f6606398181705ff"
  },
  {
    "url": "assets/js/64.42b7ae63.js",
    "revision": "b4726b7a79c022c5b6f46e40d5e51f16"
  },
  {
    "url": "assets/js/65.5e14bfa2.js",
    "revision": "037beaebedb2b130abaeac94a9159559"
  },
  {
    "url": "assets/js/66.5bedc4da.js",
    "revision": "a3f48b14dc25fb5ee2531f5c0293a636"
  },
  {
    "url": "assets/js/67.6a1ee4cd.js",
    "revision": "7efb39888cdb37fcbbd9c48e54511743"
  },
  {
    "url": "assets/js/68.6515afe3.js",
    "revision": "7528ad6a0ba6faf7c6dc459fefdf9ed3"
  },
  {
    "url": "assets/js/69.262261c0.js",
    "revision": "33bb3b7103e96e382da28a746a420657"
  },
  {
    "url": "assets/js/7.574f184f.js",
    "revision": "165b18725b95fd05d69422e261120ed8"
  },
  {
    "url": "assets/js/70.a2065a55.js",
    "revision": "430ee3cd15615c7741683406dc53cc3a"
  },
  {
    "url": "assets/js/71.76e83172.js",
    "revision": "2f8f4640c24df23008d87c7213ead458"
  },
  {
    "url": "assets/js/72.581c1da2.js",
    "revision": "8e70bcd44046f651506d6272653073e6"
  },
  {
    "url": "assets/js/73.448c88b0.js",
    "revision": "edb308131ac428916e8d9949e7df63bf"
  },
  {
    "url": "assets/js/74.f2c6daf2.js",
    "revision": "b65f8e2b05a964cc2ec9d7a269527d11"
  },
  {
    "url": "assets/js/75.e82e62cb.js",
    "revision": "c436b29e0f730fd9699a8f9125cbf9b4"
  },
  {
    "url": "assets/js/76.bfd73f27.js",
    "revision": "7cb06ebf7d0ad19bffcb5fb42ae29809"
  },
  {
    "url": "assets/js/77.22a41c87.js",
    "revision": "c273b60d167d85ccc24c33cc57958ef7"
  },
  {
    "url": "assets/js/78.f99bee45.js",
    "revision": "e83a5685d3d41b77df4fdf0e5d299191"
  },
  {
    "url": "assets/js/79.8127e7f7.js",
    "revision": "81c208c735aa60a528e0e2c4e78ac9d7"
  },
  {
    "url": "assets/js/8.44e2ec24.js",
    "revision": "1642ec963948d2619ac0ce6cb8036b31"
  },
  {
    "url": "assets/js/80.42eacae5.js",
    "revision": "a4b63200d454ab45ab0f1a1a846e48d0"
  },
  {
    "url": "assets/js/81.cf40d4b2.js",
    "revision": "09f11e6976572cb05e1c820bfc1c9fa7"
  },
  {
    "url": "assets/js/82.70175927.js",
    "revision": "e59daaff1ff639f20e09bb0c5122f57a"
  },
  {
    "url": "assets/js/83.2cffe812.js",
    "revision": "4a7cc4de32ffccc16bccdc52ea6ee491"
  },
  {
    "url": "assets/js/84.9ff1f804.js",
    "revision": "8486308450ce81084f158434736674e3"
  },
  {
    "url": "assets/js/85.39d842d7.js",
    "revision": "d71486446c522efc5321c81eb6216808"
  },
  {
    "url": "assets/js/86.b18662d1.js",
    "revision": "ea47882d21f0e366c9c64290a790af50"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.da06d019.js",
    "revision": "8d884c09dc6dced1cd23d04e5b0d6fe6"
  },
  {
    "url": "assets/js/app.922b05d0.js",
    "revision": "6a2486b8be6e0699f128f3f582246705"
  },
  {
    "url": "compiler/ast.html",
    "revision": "72acbd31e5aedcc1dec87112ec06b047"
  },
  {
    "url": "compiler/binder.html",
    "revision": "f923660845d7348814cbbf18bf02fb1a"
  },
  {
    "url": "compiler/checker.html",
    "revision": "30b1fcafafc307d189a18b563fc6e0df"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "9d7337635f8f6c1445a58422b8f63126"
  },
  {
    "url": "compiler/overview.html",
    "revision": "92896566786beef051e5bab4027cf602"
  },
  {
    "url": "compiler/parser.html",
    "revision": "7b845aa2d8d3aeb90b555e5eadc8f96b"
  },
  {
    "url": "compiler/program.html",
    "revision": "e64ebd278ab016adf64e24b0c8f7639e"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "a9070956821eda0048ee7273b528b4ab"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "348cbfbb2c070dddf0480525d68c121a"
  },
  {
    "url": "error/interpreting.html",
    "revision": "96c1b9ae25ff83003e55dff79f880706"
  },
  {
    "url": "faqs/class.html",
    "revision": "bcb3aadb188811f27bac810d0cc10715"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "524b705a93590b911caf091b9bb9fea2"
  },
  {
    "url": "faqs/comments.html",
    "revision": "ed9b4abd3d77542755c9c624fbd79828"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "ed30d0f7c5adb7723eb3da90861477a6"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "afef93e8f821ffcf8f91233ca09252af"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "7ca7d989aaca120e4a70d296a5ee12cf"
  },
  {
    "url": "faqs/enums.html",
    "revision": "a81267f6a811e8d90df8298849f368bc"
  },
  {
    "url": "faqs/function.html",
    "revision": "5f23767dc9c3440d77e5ca0eb357eefe"
  },
  {
    "url": "faqs/generics.html",
    "revision": "c2d80c5322128e1fa139ce5260b853b5"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "6f18c27a1c5d660470002b39bc2b8ff5"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "599f21c91989b907a8120ea061510338"
  },
  {
    "url": "faqs/modules.html",
    "revision": "e256b9c8e40b647941cf7a663fff43c6"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "b7c9f19650f810f9fccfc10d1738677b"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "8b71280d3b2de01729f6c434b34d8b6b"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "f725a7e9ce1d8a048d70cf814b51817a"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "fba6a3f89d32f1f21ea626e494716e6b"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "9c38ecfcb7ad29f215cd7f6d236091a0"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "7daea19aa086ecc848e756f09ee5e802"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "26c36ef8ec9f2641f276f4d6ad496e39"
  },
  {
    "url": "jsx/support.html",
    "revision": "0d71be143f3726c7bbd118bbae20bd6f"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "5f65bd24b8f2813f76a3db03a31ee86a"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "cc0e41ceb80fdae19a0c79677da6558b"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "06a40271d9c4663e02b5d6668671b09d"
  },
  {
    "url": "project/modules.html",
    "revision": "212135d320ae267f628ba2295bb71b68"
  },
  {
    "url": "project/namespaces.html",
    "revision": "dbda8ac2b66724f6feed07480638c01f"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "756fef685334cb88ad8974841cbdd219"
  },
  {
    "url": "tips/barrel.html",
    "revision": "0e752a6fcc5313ad44dbcf3c3358e026"
  },
  {
    "url": "tips/bind.html",
    "revision": "c2b8521b2201d260a09f97f342878059"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "391a5ba4e9c277f2ec0441a8f91290da"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "243cbf60555fd1d04a70c6c3814da77b"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "166709bda56006d406bd66bcb80fcbaf"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "3cfa6f23c4897bbc9c23b47d89231a83"
  },
  {
    "url": "tips/curry.html",
    "revision": "a86fff0bba395a74b3487a71544c76d7"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "834db483f501de1738086eb91c1a3423"
  },
  {
    "url": "tips/infer.html",
    "revision": "eb0600c0b30ac84c1e4876d52a7ab6c3"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "4905b8a36338b0b25048012d7de4f2fe"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "5738c9386e76da375124209baa9a99e1"
  },
  {
    "url": "tips/metadata.html",
    "revision": "23ce49c551e399f835a66c0e3428b49b"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "377aadfe661f3be0b32d592ae63b7d8d"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "5c59d0f15c69219930602546168ad922"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "32afa7917638b63a4b85f9c68f53a9bd"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "983cfc58df93b5bd44ea7246fdfec78a"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "c840cf99feacad591bc1f2baa3676f84"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "3e423e803bff0a6de7c94772a8cc8bde"
  },
  {
    "url": "tips/truthy.html",
    "revision": "446301be017165f24529f4e0f2445a04"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "d608c3c80073b0ed74a7c3482a8783f7"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "8d09a5e84ae85a3f9031f2c37de5ecf3"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "d16ea817131f7044971edaffe4a59208"
  },
  {
    "url": "typings/callable.html",
    "revision": "97a0124f213d74e1bb868264e7c918c2"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "965c5b1fbb9eb7795f1203a27ba682ed"
  },
  {
    "url": "typings/enums.html",
    "revision": "ced373372ab796befe55fc7b200a51cc"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "083568185830569a8f304996e06ec5fe"
  },
  {
    "url": "typings/freshness.html",
    "revision": "04c171d262c5bf1bb7bcca0589c60e6a"
  },
  {
    "url": "typings/functions.html",
    "revision": "83e14372877bb20971f3dff64431fdc5"
  },
  {
    "url": "typings/generices.html",
    "revision": "90a0a9e24f76603f6facfff2ab2e6a89"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "3f587afd7c002922f5999bd9dca0c20a"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "871716b97e3b968a36bb33359e0b8fd0"
  },
  {
    "url": "typings/lib.html",
    "revision": "412a8005d1841d597f8b1e0e57b18c9a"
  },
  {
    "url": "typings/literals.html",
    "revision": "17af35c231079ae8ff7048e5f9a9c86c"
  },
  {
    "url": "typings/migrating.html",
    "revision": "dfc4b0eac4bf9eeb4ac658cd262d35c2"
  },
  {
    "url": "typings/mixins.html",
    "revision": "1413b388af10bc245fc830142603d340"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "92b892080d9fe7b268fe11b271f07d12"
  },
  {
    "url": "typings/neverType.html",
    "revision": "7eb37279d3749f993b3d52b3f4d40059"
  },
  {
    "url": "typings/overview.html",
    "revision": "09be178e8c8d3bb9965b5b747236c8b4"
  },
  {
    "url": "typings/readonly.html",
    "revision": "d509251210dfcda4417f42f475ff065f"
  },
  {
    "url": "typings/thisType.html",
    "revision": "36ba2d5b2307a7c63187bb070e65236a"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "cf08590824ef8f1c53834ea8728866f8"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "f34758a44816d1eb271722b456932ef6"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "f275a6a23ebcd228a9ceac7cbb08aa89"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "0ae1e721b472e502ab939133e971975f"
  },
  {
    "url": "typings/types.html",
    "revision": "87021bbb9b745f3ccddac3c22d21c34d"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
