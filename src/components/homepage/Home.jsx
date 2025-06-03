import { useState } from "react";
import "./home.css";

export const HomePage = () => {
    const cards = [
        {
            id: 1,
            brandName: "Nike",
            price: 299,
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/edcd3c22-2c4e-4442-86d2-8e5bbc0a9ea9/LEBRON+XXII+WTM.png" },
        {
            id: 2,
            brandName: "Adidas",
            price: 320,
            img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/q/s/n/-original-imah25hq9y8t3ukf.jpeg?q=20&crop=false" },
        {
            id: 3,
            brandName: "Puma",
            price: 280,
            img: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/" },
        {
            id: 4,
            brandName: "Reebok",
            price: 310,
            img: "https://imagescdn.reebok.in/img/app/product/3/39857233-17113227.jpg?auto=format&w=390"
        },
        {
            id: 5,
            brandName: "New Balance",
            price: 270,
            img: "https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw3b6e9477/images/page-designer/2023/august/15310_Comp_T_Image.jpg?sw=991&sfrm=jpg"
        },
        {
            id: 6,
            brandName: "Converse",
            price: 250,
            img: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwfbc11b0e/images/d_08/560845C_D_08X1.jpg?sw=406"
        },
        { id: 7,
            brandName: "Vans",
            price: 260,
            img: "data:image/jpeg;base64,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"
        },
        {
            id: 8,
            brandName: "Fila",
            price: 300,
            img: "https://i.ebayimg.com/images/g/QikAAOSw1ZxluC42/s-l400.jpg"
        },
        {
            id: 9,
            brandName: "Under Armour",
            price: 290,
            img: "https://ua.cdn.csagdev.cz/zoh4eiLi/IMG/31536000/gjJY7OE2nhQjkNWabI2z3EbiJ4dAWUTBUbvRzH2zLCU/fill/3840/5120/sm/1/aHR0cHM6Ly91YS5jZG4tYmUuY3NhZ2Rldi5jei9jYXRhbG9nL2l0ZW0tcGljdHVyZXMvN2JlMjQ4MTQtMzc0Yi00NTBhLTllYTUtOGM3ZTYzNTI3YWQ4ZjQ0ZjI5NGEzY2Y4OWEwMjFkNjU4MjlmZGQyMjNhMzgtMjY5NjUzLmpwZw=="
        },
        {
            id: 10,
            brandName: "Jordan",
            price: 350,
            img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFRUVFRcXFxUXFxUVFRUXFRUYFxUVFRUYHSggGB0lHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QFS0dFR0rKy0tLS0rNy0tLi0rLSsrLTcrKys3LS0uNy0wNysrListKy03KzctKzc3Ky0yNzctLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAYFBwj/xABAEAACAQMCBAQCBggFBAMBAAABAgADERIEIQUTMUEGIlFhcYEHFEJSkaEjMmJygpKxwTNTotHhFUNz8IPC0iT/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACcRAQEAAQMCAwkAAAAAAAAAAAABEQIDMRLwUXGxBCFBUmGRweHx/9oADAMBAAIRAxEAPwDKBYcJMFhCwIcIcJMEhCwIcIsJYxiwgV8IcJYwiwhVfCHCWMIeXCK2EOEscuHCFV8IcJOEhwgQCnFhLGEGMCDCLCT4RYQiAJFhLGEPLgV8IMJZCRYQqqUjSktlI0pAq4RuEtYQYQiqUgwlopAUgVsYpYxghUgWOxkgWOwhEQSEJJgkcEgQYRwWTYR2MKgwhwk4SHCEQYRYyfCHCBXxhxlgUr3sOguT2AHUn0HuYChAuQbWvckDbubE3hUOMOEB1lMfbESa2kTYOL/G39YC5cWEvfVmxyAuvqLMPmQZEacCthEEloU4RTgVgkOEs8uHlwK2EbhLfLgwgVeXGmnLfLiNOBSNODCXDTjeXAqYQcuW+XAacIq8v2/rFLOEUBgWPCSQLHBIVGEjsJKqR/LgQYR2EnCR2ECuEhwlgJCEgVik6PBODtqamI8qru7noi/3J3sP7AmTcK4S+oqBEB7ZNa4pqwuGfcWuOg6m4IFjcdTxHqE0lDGi2NOjW071H7vasjOzWG4KKQANgCD0OwP8R8CQUlWlUNOnSYOQwGNRgD5qh2LH42t6Tzzj/DKmocnT6hHqWZOTZkY2XPFW3DEhdgbdJqvF/FDaqncMRvffci3Xpsx+FveeYabib0qhZT5g4cX38ym43/EfOBxaldyd7j+34wLqWHea7x/w1GFPiWnH6LU/4oHSnXtc39n3P7wb1Ext5FxGh4J4pq0GBDfI9DNzwzjmm1Is36J/UWxJ91/2tPI5JRrMpuDCZey6jQsm53Xsw3U/Pt85CKcz/gvxTULCkVaoDsVCl9unQdpr69Jb+X9U7j1Fx0+RuPlGVsxMqIpw8uWuXDy5UVMIMJb5cXLgVBTi5cucuDlQKRpQGnLvKjTTgUjTg5cu8qN5cCjyopdw94oRVCR4STBI4JCogkeEkoWOCwIlSOCSQLHhIEISO1TCjQfUuuQQhadPvWrN/h0xb7NyC3t8ZYWmSQANzsB63nO8RvlxLhujB/R06lKofR2evcm3uiU/5jA9D0tIcP0HnbKoFL1nJsalZ/NVcntve3oAB0EwfFKqvpaiObhtmtt5MVJ27frr+JE1H0p6groyo3LEbXsWsykgdyccj8FaefVdV5H73BI9wXUAfIYwOTrtc1SijufORhU3/wC5S8rkj3GDgDs49JlNUN53K9QLcE2V9r+lUElHb0Vg5T4qpOyzj1l7EWI7dCIGr8B6pKyVeH1yOVqFIBJAKPsQyX7g2Ye6zD8S0FTT1alCqLVKbFGHa47i/YixB9CJd4fw56zNgD5Fubduy79rbtf0VpY4lrTUxNbesgCirYXq0hsuQINnTpla9rDsJFk8WfLj1Et0+H1mF1o1WHqtNyPxAm+8O0hVoBlerkNiObVG/wDCwlDiPDgDcqCfUvWJ/N5M3wdOjb+a/b9uboOF6hUBCYWsTzCKNye96uIP43sJ6roKbPo6NR2D1ASj1Bcq97soV2A5mIFi3S5tc2nnPA9P+mXGlSJuNzTVyPe73nsOvLGhTDG5yv8Agtv7zE0Y1dT07vtfXszax7px9O/NwsIcJYCR2E6vCq8uDlS3y4uXAqinFy5a5cWECoacHLls04uXAp8uN5cumnGmnCKXK/8AbQy3yopFcwLHYx4WOCyhtobR4WPCQIwseokgWOVYFjhFO9el/wCRPyYTBce1/J4np67Gy0jQLE9kSpZv9IM32jfB0f7rq34EGYzx1w8JqxmPLy1B9+t7QNp9MVUfUgFYE8xBsdwCclYEe6Dce3tPPNFqRXpNcjmICG6C4YgB/YXK5AbXUWsCqi0Ur1+FiqVJSmVpj7RK0QBkfYBmHa2HS0yvCtXyqgJ6HrtfY7X99ifiCR3MgbqHvfLuAGHr0vKhJOx3Ntj6gC1j+0LfPr1vfocao4vfsenfrY2v+YO1wegNwOWz7G/b8dpR6b9G/AwdOarD9cnr6ZEfhZFO/wDmnsd85474IopfWqeQVt7MrI1y4pm6MAVN+tx9kT1TgGjFDSU6Z2IAS5I8xW1MN8Tywf4p5x9KHHKNSmlKjVSoc7vg6uAF+y2J23sf4ZFQ/R9pmKM3Yn+287HGtFLH0btTOlAVgWBOQ7i57iZ76SuMecadTYWu9upHZfgTe/7tuhMiqem4sUfDSpzKh+3iWVd7EhR+sB947D3E9E4HWqVKQeo5e5JUmwuo8l7DYXZGO3rPM/CQVanmbBqiMiNi7NlVUoLIu9iWHXr29J7KdEtFadFdxSpIl/WwuT8yTKisEhCScLDhKiDCLCT4Q4wK+EQSWMIsIFbCHCWeXFhAq8uNNOW8IOXAq8r2hlnl/wDu0UJhxMI7CT4R2EKgCRwSThI4JIIAkeEkwWOCSiIJK3i/hwraI1ft0evqQbA/kF+d50MY8KCrI36jqVYeoII/K9x7gQSZuHK+iKoKmgqUzvy9Q4t6q6U3H5lvwnn/AI94KNLqnVRZWOaDsFbqPazXE2P0bUzpNfW0rHatTyH79Fug9bo7Nf0tLn0v8H5lBayi7Uzvb7rH/f8ArIPK69TOiv3k8p91O4/A/wBZQ0OpVKtN3HlSojMOvlVgWsO+wMmotYEeu0p10lH0toXApJaxxsPXceVv9Qf855px/W8N1Ot+rNp0qM9v09J6ZGZyujvkpUiw+2d2tYW3u/Rx4kz04p1DuilehJJphQzd7nl8s26kpWI6yvxX6OdLqTUOlfkVUNmRfNTudx5Ps3HTE236GRTn+jQ0WFXTVa1Jh910cfCzWJ/EzkcX4CHqBtRmHXrWuibX6YlCvW/8xknBuN6jRBtPqNQzspK4t5lFrWwJW5G/c/KWdMramoHVTf77EtYd8Qdl/AyLhZ0Y0PD6f1k0i7i2JIqVKmTXCk5HFWO9tgfUjvt6dRqiq7oabMqkqSpO6jupI/ORr4cpVdL9XqA2dqbErsb06i1BuQe62PsT07M4VVdzWJuaYq40T2akKdMgpuSULFiLk7ESxKshYcJNhCFlZQ4RYSbCHGBCEiwk+MWMCDCLGT4xYwK+MWMnxixgV8fjDJrRQOQEhCSbGOCwqEJHBJMqQ4wiHGOxkuMQWBFjHKskxjgkDP8AiTQMDT1lAXradlcL/mKDun8QJW/7Z9dtjqBT1mmBU5U61O4P7Li4Nux36eolHlgggi4IsQdwQeoIkHhoHTVG0rH9FUY1NOSd1ZrtWo/C/nG9zk/oJnjydMdUz8Z6d8vDeL6R6NZ6dTqrsD6jHa/wtac6sP8Ag+s9C+mHhuGoFS3+LT/1J5T/AKSpnntS+/7wH8q2a3zUSsLvhXiTUNSpHVmXG9v8QH9H26G7UydrLWY9p6nw/XrS1NKoh/Q6hVQWubXvysvTbJDfvQW9u3idVQfmSLfl+e/4T0zwhr+dp8WN2JLHpfmXVahFh986eoew+s1PTYsP8WaTS0dSS7tlVJqMbl3TzE+/lNyAvYKPSdvgPGtJTRTTJIIJDYWvbsuRv269JmK/htNUH1ZqObmzpcAeQAHcjYYgSz9UwzdseWmIRUFlboKd/vbkD0HYCSq2Vfjerqoamloo2J2VyfOvcL0BPzA+MqeBfFVXXioayAVFezYrgi7WxIY5Frj3t3ttOhwp6lTSJUpUy7hkJRCqkjLF7FiFuoJaxIvjaUNDwh9JUr1FdWranVI/IplMUpmoprNUZht5eY1gR8z0RK1mMWMlAhxmmUWMWMmxixgRYxYyXGLGBFjBjJsYsYEJWArJsYMYENopNjFA5IWOCyS0NoDMYbR4EIEBlosZJaOCwIgseqx4WPCwGhZDxDR8xLDZwQ1Nvu1FN0b4Xtf2vLYWOtJZldOq6bLGP+lGmK2io6gD9VlJHcLUGLL/ADYAj2njhK2sdii1Dcbks26Ai+4uhF7bXAsdp794z0OXD66Dfy1WHsQ7VV/AqPwngVNmLMikjmlEsLEtZhUQWJAJzUW3HX3MRdWM3HCD6rucbsqLkxBsBkLDzAEDYXs1r2K9bX6fhXVmnUsQSKimqqrbdqatmikGwLUGqrbY5FOlhOXUYnmBbDmMqADJid7LcLuR5b2Iux3AJGwr1saoek1zRKMjeUrkpyWxIUsAQv2bmxJEqPVtMyq1VKmLUqiEtcDC467H7Ju59xb2lXh2u+uU2TkLUoUXBWoz1KYBQlgamNiVHW299ttto6FRH05xAtsVBH/aamHpBuv/AGmpJ8aLyxR4eiqmmo1eUK4YpTIyU1FUMXK/rWCg3AIG/SRpFUrGsRT5lSonQUqQNOmfU4J0BP3iTvuTOcPFhoH/APmp40w+DEIQMuhutvO2xHmy72F7Ed3wxwbWaauBXHMyNlqUwWpldrb28h6+U/H4a/jnhnT19NUos4oh3FVqi43VhU5jNc7XO9z+0ZBe4TqObSV7WyF7XDWv0uRte0ugTOeHRVWs4UE6QqgouxuzuFu7qB0Q7W6fqnYC001ppmm2itH2itCG2itH2itAZaC0ktFaBGRAVklorQIsYpJaKByrR1oQscFgMtCFj8YQIAAjgIgI4CAAI4CERwgICG9t4IQYFfQ6nn0nv0bp7rUQMD/qI+U+cdZSNKq9Mi/Ld1I6XxJUj8vzM950moGmqPTbZV3/APhqMSrfBGzU+i7zyj6TuG8rX1LDaqBUHpcjFgPmt/4oVl2oC9On7BmBHQkAHIkAgWFz1ABuOsrVHJUu2+dQm563/WbruTupJv3HrJDUtlexulu3XYA3PSxa+1j8rxlIeZBmAB5rkGynuLb36em52tA2fgfWXTlnc0y9M9P1GDVqZIvYm66lAAds1+M7XFNd9UQVC12NRRTUXuWNjZr+4JImD8K6opqF8wBreQEm9qmSvRYj/wAq0xc9i246z0ZtQWNN08q+UEdGAZTjf3A2PbZvhIsdp/ElSjSQ1/Llsi2VDUPsgJIAFt/9xM3xjW6ivu5uLgimRdAOxNIHzbkbsSPadLh/C6epqvdGDp5c7BWZSQQVAG6g33t3PpNNpOE6fTKWqFWsLtewUG1myJ6gyK81bjGs0mspHUVWYVRYXN0C98KYIFxtsLb4z2vRVxURXBuCO0w3EvEI1CNp9HpkrKfLk9Nfq62ItYMPOQQD8hOl9H2jqaam2nq1OYS7PfoFLBSaYA7Ahun5dJYla60UMMrIWitDFAFoo6K0BsVo60VoDbRR1ooHLAhAjrQwBaK0daKAMY4CIQwFaG0UUBWihigcrj+jZlFWmuVSlchdv0lM25lL5gAj9pVnnfj+mtbSU6iG/IKYNuc6Fa6qN98lZQpv6Anrt63PPvG3hnUtmdJSFRKl2anki4sxV6lsmAszU0ba/mB2sxitacZxeHjlan1Hb/YxrOSXbEGygE42VSRYWx2B2IHbqes6PG+H1KFU06ilWB6HqO9jbY7EdOvXvOS46+v/ACJJZZmNbm3q29V0auZ3/CwN1C3VuoNyDe+zAnpYj8p6lwbVpVQOSFSsqta3lU1ciyn1AqpVB6dbd55flY3DHYbHcE27C3T+lh+PoPgfQM2nXfHyYqbkEB6vO2AIN+Wpb4P6GGIs1ONamjXVKCZ1EFmOJKtkO/tY3/D0nYbhbViKmvq5HqtBbrTX4IPM5+UGhrYm2VT0N6jH+s6+jpqOgAhpY0i2GKjloNhawa3sBso+F/j2l+mMcWX7O4H9v7RlIiSZS4RoKbAgEdCLj5x05fA9TcGmeq7j90/7H+onVEMhDaECG0BtobQ2itAAhhigCKGKBy4ZEKohFQQJIZHzBDmID4ZHzBFzB6wqSISPmD1i5o9YE4EREiWuPWSowPSAorxxEaVkGa8beFU11LYAVlHkbpe2+DH062Pa/oTfwTXaJqbMjbFSQfYg2IPzBn1ABPIeO+F/qtU1KlJGQsbVCpeibm+NamT5fiCPYydOLmOt3OrRNOrmcX8eXoxnhlNGHLaxmAH6oClk+JAuW69CMbA3DXsPQtF4w4aihKdY75DIpV6uRkzMVvc2FyR29IzhtXQv5W0lClU9MEIO3VGI3/I+0j4zoKVRShVbW2sACPgQJXJerIuzoQysLhlIKkHoQR1EVLXW2mD0utr6A4j9JQJuaZ7X6sp+yfyPcX6aDTcRSsnMpG47g7Mp9GH9+kqtfptdL1PU3mDTiBUzoabjPqYGw0Oqxr0zfqwQ/wAew/Ox+U108op8RzqIq33dACPvMwCAe97fDc9p6xCURDAIYQooooBghigC8UUUDMExXMEV5FG59YMj6xXggAsfWMLH1jzGmAwsfWNZj6mPMYRAjZz6xv1lh0Jj2EjZIF7S8cI2fcfnO1pdUlQeU/LvMi1KRgMpupIMDclZDWpggggEEWIIBBHoQes4Gi4+67VFyHqOv/M7ul1tOqPK2/odj+EoyXF/AdCpc0WNEn7IGdK/W+BN1/hIt6TKcY8Na/TqWUCuo+4SXHxUgE/K/wAZ6xVSVXkHzbxXWVXJFQFLG2FrW+MraHXVKLZ02se/cEehHefRPE+G0a4tWpJU92UEj4N1Hymc1PgDQN0pMv7rt/8Aa8o86oeKEYfpqO/qliP5TYj8TLVLiFNyBRpu7E2CkEXPYAC5Y+wE2SfR5oh/m/zr/wDiaHgvCNNpf8Ckqserm7OfbNiTb2G0i5R+CvDBpFdTqrGtb9HTH6lAEWJA7uQSLm9gbTbLUnBXXyzR1fvKy7AMdKlGpeWFaBJEY28V4DrwXjbxXgOvFGXhgcTkRfV5LeG8Kh+riL6sJNeEGEQ/VRB9UEsXhBgVTohB9QEt3ivApHhw9YDwwesv3hvA53/SveN/6R+1+U6d4bwOX/0f9qJeDW6Pb5TqgwiBFQR1Fi+Q9xv+ML0b9JMDCDA51Wiw+yfwvKdW46/nO+DDlAylR5Vr6m202hUeg/CIIPuj8BAwtKsWOwJ+Av8A0nd4Zo6h3ZSPiLfkd5oMoLwG0qVhJhI7xXgSXivGXivAfeK8ZeG8B14o28UDliGECGA20MMMACGKKAoobQwBDFCBAUIhtFAUUUMAxCCGA68N42GA68V4ILwHXivGxQHXhEbFeA6GNvDeA68UbDAN4oIIFCOEUUKUMUUiBCIYpQYYooCjhBFAIhiigKKKKAYjFFAUIhigKCKKAoYooBiiigKFYooBhEEUBRRRQP/Z" },
        {
            id: 11,
            brandName: "Asics",
            price: 275,
            img: "data:image/jpeg;base64,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lWy6W8lZndl3LWey7l2Y+Njp3iO/znv/AL+HPkzXyTu07RuE4tUYdSrRwfjPeWKjaXZkqZ4dwcU1uyTLTK9XjRC9QEREBERAREQIWJYDsskQc1bBMdqAobiPAQR4VYkUTETGpTEzE7h82xuBcyzmyOcKPNHkV9Rr4Rr9QonF9m6b7wuHJwonvSXp4fUpr2vH0UPI7mvcjlaK/ZVw+Fx+q4qvZ+q3c+y5J4uWP/P9fl2R6nilCd0eRTu45Bd7+F1BrK1u4cf0/VWjh5Jjelbep4/huXA5zR1K25HuF7Dl/ZdbcG4aBZjCv5LanBtPv2+n5n8OLL6jkt2r2clNjW7SeZXfh8aW6W8lh+BfyWbOHv5LsxcfHj92P5+P1cFrWtO7SlMNxhw1U3geIB6rVHhj+SnOF8OLblbKpxhlZwsWNhZoPISF6iDyF6iICIiAiIgIiICIiAiIgIiICIiAvC0L1EGt1Fp2CwOEZyC3og5vwTOQT8EzkulEHOMGzkshhm8luRBrFFo2WYC9RAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z"
        },
        {
            id: 12,
            brandName: "Skechers",
            price: 240,
            img: "data:image/jpeg;base64,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"
        },
        {
            id: 13,
            brandName: "Balenciaga",
            price: 400,
            img: "https://balenciaga.dam.kering.com/m/5731e3af30b3361f/Medium-524036W2CA11000_F.jpg?v=5"
        },
        {
            id: 14,
            brandName: "Gucci",
            price: 500,
            img: "https://files.glamourboutique.uz/products/122gu18.1500x1920.JPG"
        },
        {
            id: 15,
            brandName: "Prada",
            price: 450,
            img: "https://images.uzum.uz/cn2fsfrifoubkc6r5ksg/original.jpg"
        },
        {
            id: 16,
            brandName: "Louis Vuitton",
            price: 600,
            img: "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainers--BM9U5PMI20_PM2_Front%20view.jpg?impolicy=bgcolor&bgcolor=%23f8f8f8"
        },
    ];
    const card = [
        {
            id: 1,
            brandName: "Balenciaga",
            price: 400,
            img: "https://balenciaga.dam.kering.com/m/5731e3af30b3361f/Medium-524036W2CA11000_F.jpg?v=5"
        },
        {
            id: 2,
            brandName: "Gucci",
            price: 500,
            img: "https://files.glamourboutique.uz/products/122gu18.1500x1920.JPG"
        },
        {
            id: 3,
            brandName: "Prada",
            price: 450,
            img: "https://images.uzum.uz/cn2fsfrifoubkc6r5ksg/original.jpg"
        },
        {
            id: 4,
            brandName: "Louis Vuitton",
            price: 600,
            img: "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainers--BM9U5PMI20_PM2_Front%20view.jpg?impolicy=bgcolor&bgcolor=%23f8f8f8"
        },
    ];

    const [visibleCount, setVisibleCount] = useState(8);

    const handleShowMore = () => {
        setVisibleCount(prev => prev + 4);
    };

    return (
        <div className="container">
            <h1 className={"famous"} style={{ color: "#0B1120", marginLeft: "auto" }}>
                Famous <i className="bi bi-arrow-right"></i>
            </h1>

            <div className="carddiv">
                {cards.slice(0, visibleCount).map((card, index) => (
                    <div key={index} className="card">
                        <div className="image_container">
                            <img className={"image"} src={card.img} alt=""/>
                        </div>
                        <div className="title">
                            <span>{card.brandName}</span>
                        </div>
                        <div className="size">
                            <span>Size</span>
                            <ul className="list-size">
                                <li className="item-list"><button className="item-list-button">37</button></li>
                                <li className="item-list"><button className="item-list-button">38</button></li>
                                <li className="item-list"><button className="item-list-button">39</button></li>
                                <li className="item-list"><button className="item-list-button">40</button></li>
                                <li className="item-list"><button className="item-list-button">41</button></li>
                            </ul>
                        </div>
                        <div className="action">
                            <div className="price">
                                <span>${card.price}</span>
                            </div>
                            <button style={{ backgroundColor: '#FDBD00', color: '#0B1120' }} className="cart-button">
                                <i className="bi bi-cart"></i>
                                <span>Add to cart</span>
                            </button>
                            <button><i className={"bi bi-heart"}></i></button>
                        </div>
                    </div>
                ))}

                {visibleCount < cards.length && (
                    <button className={"showmore"} onClick={handleShowMore}>Show more</button>
                )}
            </div>
            <div className="twicediv">
                <div className="second">
                    <img src="https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/3HXsKaCbzqktXwnVnmYyMSIKofg9poZU7eWLFEiyrVhUJBT5s7zOSVigU2Bi.jpg" alt=""/>
                </div>
                <div className="second">
                    <img src="https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/lbPZht6jDm2vA3sXN6ux6mdvbvHArxfwCqSpnpOc0n1WXoV2KeHxrkeqMdCC.jpg" alt=""/>
                </div>
            </div>
            <div className="carddiv">
                {card.slice(0, visibleCount).map((card, index) => (
                    <div key={index} className="card">
                        <div className="image_container">
                            <img style={{height: "100%",width:'100%'}} src={card.img} alt=""/>
                        </div>
                        <div className="title">
                            <span>{card.brandName}</span>
                        </div>
                        <div className="size">
                            <span>Size</span>
                            <ul className="list-size">
                                <li className="item-list"><button className="item-list-button">37</button></li>
                                <li className="item-list"><button className="item-list-button">38</button></li>
                                <li className="item-list"><button className="item-list-button">39</button></li>
                                <li className="item-list"><button className="item-list-button">40</button></li>
                                <li className="item-list"><button className="item-list-button">41</button></li>
                            </ul>
                        </div>
                        <div className="action">
                            <div className="price">
                                <span>${card.price}</span>
                            </div>
                            <button style={{ backgroundColor: '#FDBD00', color: '#0B1120' }} className="cart-button">
                                <i className="bi bi-cart"></i>
                                <span>Add to cart</span>
                            </button>
                            <button><i className={"bi bi-heart"}></i></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
