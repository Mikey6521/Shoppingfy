const data = [
    {
        id: 1,
        title: "Fruits",
        arry: [
            {name:"Apple",price:60, img:"https://5.imimg.com/data5/SELLER/Default/2021/8/YN/SE/FV/72826034/red-apple.jpg"},
            {name:"Banana",price:40,img:"https://imgs.search.brave.com/cf3x8FERG7ptZQPxtHp0cLLZCIuakLVBWg96hwQe7iU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzUzLzAzLzY5/LzM2MF9GXzUzMDM2/OTEzX0ZuOUpvc0hx/VGk5N0tRSjQwcTRp/NHpnaW1QaEpoTEFt/LmpwZw"},
            {name:"Mango",price:50,img:"https://imgs.search.brave.com/HweHcQ-7uHFMNchJHJAvGuptcgt85Btt5w1H3WB5vzY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzQ0LzcyLzIz/LzM2MF9GXzQ0NzIy/MzY4XzZqRnNoNnM1/UFJXVjZaMEpIMDZ6/dXVQVXhXMDNib2FY/LmpwZw"},
            {name:"Guava",price:35,img:"https://imgs.search.brave.com/GoDlgeHB4lIJC9Wmu3PZfjCImRug2RFalsQ7zfeX8Po/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/NTc1ODExL3Bob3Rv/L2d1YXZhLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1jalZE/cGlzRnJUOEpscUZi/U0VJbWtmc1hnUWJ0/ck5DZFNUSUxHQXpJ/ajJRPQ"},
            {name:"Orange",price:80,img:"https://imgs.search.brave.com/NbF5aWIA4z3ggMbygJqQYclqfBvVNU2dQsdnGW0TF2Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk0/MDM3NDYwL3Bob3Rv/L29yYW5nZS1mcnVp/dC1pc29sYXRlZC1v/bi1hLXdoaXRlLWJh/Y2tncm91bmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVBv/ZHB5ajJmdmlHNzZt/Q1NzcjNhUjZPM3Q0/bzNMZGthaFRIU1Uw/R0JDbVE9"},
            {name:"Starfruit",price:75,img:"https://imgs.search.brave.com/NbF5aWIA4z3ggMbygJqQYclqfBvVNU2dQsdnGW0TF2Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk0/MDM3NDYwL3Bob3Rv/L29yYW5nZS1mcnVp/dC1pc29sYXRlZC1v/bi1hLXdoaXRlLWJh/Y2tncm91bmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVBv/ZHB5ajJmdmlHNzZt/Q1NzcjNhUjZPM3Q0/bzNMZGthaFRIU1Uw/R0JDbVE9"},
            {name:"Jackfruit",price:90,img:"https://imgs.search.brave.com/ulA9b0iMY3FlbXF4Ut9jK7D83JSPNdvC3laKtp5IEqc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/MjY4MjcxMC9waG90/by9qYWNrZnJ1aXQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXZRUmVkYmZqOWli/c0lCdERqUlFkdXJK/OV8tOVI0WUlMZmh3/WFBqdlRXRlE9"},
            {name:"Coconut",price:42,img:"https://imgs.search.brave.com/ulA9b0iMY3FlbXF4Ut9jK7D83JSPNdvC3laKtp5IEqc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/MjY4MjcxMC9waG90/by9qYWNrZnJ1aXQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXZRUmVkYmZqOWli/c0lCdERqUlFkdXJK/OV8tOVI0WUlMZmh3/WFBqdlRXRlE9"}
        ]
    },
    {
        "id": 2,
        title: "Meat",
        arry: [
            {name:"Chicken-boneless",price:250,img:"https://imgs.search.brave.com/MHLkK1IfYrU0kdR6THw4RVMRozWCYXBa7vBjzXcI4HA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly80Lmlt/aW1nLmNvbS9kYXRh/NC9QTy9NUy9NWS00/MDIzMTY5L2NoaWNr/ZW4tYm9uZWxlc3Mt/MjUweDI1MC5qcGc"},
            {name:"Chicken",price:200,img:"https://imgs.search.brave.com/lF2zEWRgZCo-wWuP6NRAuluYU8bhioiGWPSOYsjLkRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/YXctY2hpY2tlbi1t/ZWF0XzEyMDMtNjc1/OS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"},
            {name:"Mutton",price:400,img:"https://imgs.search.brave.com/L1kjViaw1RxOTuIvjKqCR4L42iUOQ949aZhTTii-6us/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlZWF0/cy5jb20vdGhtYi9B/c0hWV0VxNUphb3RY/ak1JdnJzMXdLVThX/YU09LzE1MDB4MC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTptYXhf/Ynl0ZXMoMTUwMDAw/KTpzdHJpcF9pY2Mo/KS9KTVRhbGJvdHQt/NDY2ODM4MjQ2Yzcz/NDQ5NGIzMGJjZjQ3/YjYzM2UxMTYuanBn"},
            {name:"Prawns",price:300,img:"https://imgs.search.brave.com/QYSRD9Ve9d3o9i_NaO0J1Sw7xPr0IeYbXMIc0h-HLg8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY0/Mjk4NTAzL3Bob3Rv/L3ByYXducy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WWV1/VzU4M2I1VnJFZGs2/TXBJVFVmSnZTNE1z/QU1jeFp5OWVPS2Vi/cUpPcz0"},
            {name:"Fish",price:350,img:"https://imgs.search.brave.com/q6Zp4OTXfl3WJEPsksZqtLB37ElRTjATue33m0jFf5U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jYXJu/aXZvcmVzdHlsZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMTIvTWVhdC1E/ZWZpbml0aW9uLndl/YnA"},
            {name:"Crab",price:150,img:"https://imgs.search.brave.com/a9j6GdsZQPgpZFsVJri-yw2-4A4o5cHFAE2tUMbw-cM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgy/MDUzMzU3L3Bob3Rv/L2NyYWIuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVkwWEhK/NkRyai1xMF9heGxT/WkcyZHFqVVQwNlM4/SFZZckFQVzdqbUtk/WXM9"}
        ]
    },
    {
        "id": 3,
        title: "Electronics",
        arry: [
            {name:"Frier",price:400,img:"https://imgs.search.brave.com/68o_blLDTS6r5ZHqcd4PRXSs6CjiQUK3KlaNI73_MvU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFWdmN0UWVRdUwu/anBn"},
            {name:"Toaster",price:500,img:"https://imgs.search.brave.com/8SaAkK_GhVtO95jmSkCqqCpPO-qyZMbrJsl2I7RSrqg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjEx/Ny0wMDAzNDYvcGhv/dG8vdG9hc3QtaW4t/dG9hc3Rlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Yzlw/ZG5zWEJpTjh4SXpI/SGpRdGdDdFlpQ1ZX/NWFFUGYteFJMRTEy/M3RXWT0"},
            {name:"Iron-box",price:600,img:"https://imgs.search.brave.com/gGWf3226q6V1Wgs8_yaHvx8pXgiswCoHTVpKRlVLPss/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIzMzQwNjI5L3Iv/aWwvMjVmYWY2LzQ3/MjE2ODQ1NDkvaWxf/NjAweDYwMC40NzIx/Njg0NTQ5X2xkN3Eu/anBn"},
            {name:"Drier",price:300,img:"https://imgs.search.brave.com/l8t5MOIKG7IXXG1obZssCV1BxVsuozoRsLu2p7CXkG4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/MTEyMTE3L3Bob3Rv/L2hhaXItZHJ5ZXIu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXdoc1c5dWVtc0JI/eGZqLVdJbUNDRDRs/bmsxSDlUSkZtWktE/YUpnRGhfaHM9"},
            {name:"Straightener",price:800,img:"https://imgs.search.brave.com/o3jGwb3ALg4a_FQRxD7BXSJu7Ui13KWh-ZfqYqmgpy8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNTk2/MTIyOTk0LXMyMzQ0/Mjk5LW1haW4tem9v/bS5qcGc_Y3JvcD0x/eHc6MS4wMHhoO2Nl/bnRlcix0b3AmcmVz/aXplPTk4MDoq"}
        ]
    },
    {
        "id": 4,
        title: "Vegetables",
        arry: [
            {name:"Onions",price:20,img:"https://imgs.search.brave.com/z0AS3msHo3nSmcQPPygwq-z0nc_dWUeOhC0lL8f9zF0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAz/MDU5Mzc1L3Bob3Rv/L29uaW9ucy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YVFF/YnF1TFJMdmM1YjVf/MmswYUprVlBBUUtQ/UGxhU2lkQ295OFZK/REdXWT0"},
            {name:"Tomatoes",price:30,img:"https://imgs.search.brave.com/kETt8NtoP05lZpdAmTPYnqyeQUX2ecK3iBhIf2lVHUs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/NTg5NDE1L3Bob3Rv/L3RvbWF0b2VzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1t/ZUxKUkZBeUdFTTZ6/dDZka3BXN3VNMHgy/V3Z3cjNUSEN6VEE1/bUZRZ0ZJPQ"},
            {name:"Peas",price:40,img:"https://imgs.search.brave.com/wr6y3NZXxWUoGiMr-Z5jwe8xMvVl1l_Ar1AOeU0XEuI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM1LzkwLzEy/LzM2MF9GXzIzNTkw/MTI1Nl85RVo3anlM/Z1AxWHRaWHB2b0ZN/c2FRcUJrUENNMm82/MS5qcGc"},
            {name:"Chilli",price:60,img:"https://imgs.search.brave.com/XhcjW_A-PY3zeHo54vWl-Et02rLUd8b6oM2cC0E_L0k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTM4/NjIzMTc3L3Bob3Rv/L2NoaWxpLXBlcHBl/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9bk1POERDNXdC/TGpnSFEtQTVrWERB/YjYyeGZwWmxVa0ZK/REt6YWVJcDY3cz0"},
            {name:"Carrot",price:50,img:"https://imgs.search.brave.com/k4RMl13i8ecoZh7BpReReQPQBJmFtbpUb56WA9wGL4I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIw/MjY1MjAvcGhvdG8v/Y2Fycm90cy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9N1F6/VzRERW9IZFNKUU5p/aXRyM1c0UnZLOUxO/REMwVjR4aFVxNm9Z/THJPRT0"},
            {name:"Broccoli",price:80,img:"https://imgs.search.brave.com/q_lsnrpIRjY-pZ3ilpnITCsByCXUMEYOIeDaKs4DmbI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDky/MzEzNDY1L3Bob3Rv/L2Jyb2Njb2xpLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1R/c1B0TklVR0cxOXN0/dGJLYVp3QUg5VmNj/MVFnWU1VZm1rVHRh/ZmJlN21FPQ"}
        ]
    }
]

  
export default data;
