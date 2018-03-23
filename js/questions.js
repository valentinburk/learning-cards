const QUESTIONS = [
  {
    q: `Difference between Thread.Sleep(0) and Thread.Yield()`,
    a: `<p>The .NET Framework gives you multiple tools you could use to build a
        more sophisticated waiting strategy:</p><p><strong>Thread.SpinWait</strong>
        puts the processor into a tight loop allowing you to wait a few nanoseconds
        or microseconds without ceding control to another thread.</p><p><strong>
        Thread.Sleep(0)</strong> cedes control to any ready thread of equal
        priority or keeps going on the current thread if there is none.</p><p>
        <strong>Thread.Yield()</strong> cedes control to any ready thread associated with
        the current processor.</p><p>And as we’ve seen <strong>Thread.Sleep(1)
        </strong> cedes control to any ready thread of the operating system’s
        choice. By carefully choosing a mix of these calls and doing performance
        testing in realistic conditions you could build a high-performance
        implementation, and of course this is what the CLR team has actually done.
        </p>`
  },
  {
    q: `Which serializer should not be used when serialize auto properties?`,
    a: `<p><strong>Binary Serializer</strong></p><p>This serializer
        automatically serializes all fields including automatically created
        backing fields. On the other machine there could be created backing
        fields with different names and deserialization will fail`
  },
  {
    q: `Another awesome question here`,
    a: `Another awesome answer here`
  }
]