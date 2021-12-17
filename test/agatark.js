<script>
    var x = document.createElement("INPUT")
    x.setAttribute("type", "number")
    Promise
    .all([
        api.patch("/devices?id="+heaterId, {
            "status": {"temperature": 22.3},
            "setpoint": 22,
            "setup": {"min":10, "max": 90}
        }),
    ])
</script>