1) What is the difference between null and undefined?

undefined মানে হলো কোনো ভেরিয়েবল declare করা হয়েছে কিন্তু তাকে কোনো value দেওয়া হয়নি।
অন্যদিকে null মানে ইচ্ছাকৃতভাবে খালি রাখা হয়েছে।


2) What is the use of the map() function in JavaScript? How is it different from forEach()?

map() ব্যবহার করা হয় array এর প্রতিটি element নিয়ে কাজ করে নতুন একটি array তৈরি করার জন্য।

অন্যদিকে forEach() শুধু loop চালায়, কিন্তু নতুন কোনো array return করে না।


3) What is the difference between == and ===?

== শুধু value তুলনা করে, type চেক করে না।
=== value এবং type দুইটাই চেক করে।


4) What is the significance of async/await in fetching API data?

async/await ব্যবহার করলে asynchronous কাজ সহজভাবে লেখা যায়। এতে code দেখতে synchronous এর মতো লাগে এবং বুঝতে সহজ হয়।

এটা promise handle করা সহজ করে এবং error handling-ও পরিষ্কারভাবে করা যায়।


5) Explain the concept of Scope in JavaScript (Global, Function, Block)

Scope মানে হলো কোনো ভেরিয়েবল কোথা থেকে access করা যাবে।

   1.Global Scope → পুরো program থেকে access করা যায়

   2.Function Scope → শুধু সেই function এর ভিতরে ব্যবহার করা যায়

   3.Block Scope → {} এর ভিতরে সীমাবদ্ধ থাকে (let এবং const এর ক্ষেত্রে)