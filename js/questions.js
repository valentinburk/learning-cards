const QUESTIONS = [{
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
        </p>`,
    t: `threading`
  },
  {
    q: `Which serializer should not be used when serialize auto properties?`,
    a: `<p><strong>Binary Serializer</strong></p><p>This serializer
        automatically serializes all fields including automatically created
        backing fields. On the other machine there could be created backing
        fields with different names and deserialization will fail</p>`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. Are you available to serialize
        properties?`,
    a: `<p>Binary Serializer doesn't serialize properties. That's because Binary
        Serializer preserves Type Fidelity, which means it serializes private
        fields including manually or automatically created as backing fields for
        Properties.</p>`,
    t: `serialization`
  },
  {
    q: `Which serializers requires same type of same assembly on deserialization
        that was used on serialization?`,
    a: `Binary Serializer, NetDataContractSerializer`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. Does your type have to be in same
        assembly on serializing and deserializing?`,
    a: `Yes. Binary Serializer writes assembly information on serialization
        and requires same assembly on deserialization`,
    t: `serialization`
  },
  {
    q: `Members with which access modifiers are serialized with Binary Serializer?`,
    a: `All memebers are serialized: private, public, protected...`,
    t: `serialization`
  },
  {
    q: `Name of classes (there are 2 classes) used with Binary Serialization`,
    a: `BinaryFormatter and SoapFormatter`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. Do you need something to do to make a type
        be available for serialization or the types are serializable by default?`,
    a: `You should apply [Serializable] attribute to types needs to be serialized`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. Are members are serializable by default
        or you should make them serializable somehow?`,
    a: `In <strong>Binary Serializer</strong> members are serializable by defaut`,
    t: `serialization`
  },
  {
    q: `Which serializers can serialize properties`,
    a: `<p>DataContractSerializer, XmlSerializer.</p> <p>Binary Serializer doesn't
        serialize properties. That's because Binary Serializer preserves Type
        Fidelity, which means it serializes private fields including manually or
        automatically created as backing fields for Properties.</p>`,
    t: `serialization`
  },
  {
    q: `When using Binary Serializer, if class A has a class B, will class B be
        serialized by default or You should make something to apply.`,
    a: `Class B has to have [Serializable] attribute too. As owner`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. How to prevent members from serialization?`,
    a: `Mark them with [NonSerialized]`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. Are constructors invoked on type creation on
        deserialization?`,
    a: `No, constructors are not invoked.`,
    t: `serialization`
  },
  {
    q: `Is reference integrity preserved by default when using Binary Serializer?`,
    a: `Yes. Reference integrity is preserved by default.`,
    t: `serialization`
  },
  {
    q: `How to apply reference integrity preservation in Binary Serializer?`,
    a: `You don't need to do anything. Reference integrity preserved by default`,
    t: `serialization`
  },
  {
    q: `How to disable reference integrity preservation in Binary Serializer?`,
    a: `Binary Serialazer always preserves reference integrity. Binary Serialazer
        is a graph serializer which a synonymous with "it preserves references".`,
    t: `serialization`
  },
  {
    q: `Which serializers allows to use four hooks attributes? [OnSerializing],
        [OnDeserialized]...`,
    a: `Binary Serializer, DataContractSerializer. XmlSerializer does not support it.`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. Which are two ways to control serialization
        and deserialization?`,
    a: `1) Serialization hooks [OnSerializing], [OnDeserialized]... <br>
        2) ISerializable interface implementation`,
    t: `serialization`
  },
  {
    q: `Can you use serialization hooks [OnSerializing], [OnDeserialized] etc
        with Binary Serialazer`,
    a: `Yes, you can`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. Which three steps you should apply when
        implementing ISerializable attribute`,
    a: `<p>1) Implement method ISerializable GetObjectData(SerializationInfo info,
        StreamingContext ctx);</p> <p>2) Implement constructor like this: protected
        ClassName(erializationInfo info, StreamingContext ctx)<br>even private
        access modifier can be used</p> <p>3) [Serializable] is still required</p>`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. How to inform engine where will data be
        deserialized?`,
    a: `StreamingContext class is to inform engine where will data be deserialized`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. What to do if you need to serialize type
        located in different assembly and is not [Serializable]?`,
    a: `Create another type that implements ISerializationSurrogate. Then add this
        new type to SurrogateSelector and register the selector in formatter.SurrogateSelector
        property.`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. What to do if you need to serialize type
        located in different assembly and is not Serializable?`,
    a: `Create another type that implements IDataContractSurrogate. Then pass this
        surrogate to DataContractSerializer constructor as argument.`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. How to bind one type to another?`,
    a: `You should use SerializationBinder class.`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. How to implement ISerializable on inherited
        class if base class implements ISerializable`,
    a: `<p>GetObjectData() of derived class must call base.GetObjectData()</p>
        <p>Constructor must call base constructor</p>`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serializer. How to implement ISerializable on inherited
        class if base class does not implement ISerializable`,
    a: `In GetObjectData() and constructor of derived class you should walk through
        base class fields manually using reflection`,
    t: `serialization`
  },
  {
    q: `Which formats supports DataContractSerializer? (Three)`,
    a: `XMl, Binary XML, MTOM`,
    t: `serialization`
  },
  {
    q: `How to serialize with changed serialization format (5 lines of code)`,
    a: `var ms = MemoryStream();<br>var ser = new DataContractSerializer(typeof(Acme));
        <br>var writer = XmlDictionaryWriter.CreateBinaryWriter(ms);<br>
        ser.WriteObject(writer, obj);<br>writer.Flush();`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. Do you need something to do to make a type
        be available for serialization or the types are serializable by default?`,
    a: `Types must be marked with one of the following:<br>[DataContract]<br>
        [MessageContract]<br>[Serializable]<br>or IXmlSerializable`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. Are members are serializable by default
        or you should make them serializable somehow?`,
    a: `In <strong>DataContractSerializer</strong> members are NOT serializable
        by defaut. Members have to be serialized must be marked with [DataMember]
        attribute.`,
    t: `serialization`
  },
  {
    q: `Four lines of usage of DataContractSerializer`,
    a: `var ms = new MemoryStream();<br>var ser = new DataContractSerializer(typeof(Acme));
        <br>ser.WriteObject(ms, acme);<br>var acme2 = (Acme)ser.ReadObject(ms);`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. Does your type have to be in same
        assembly on serializing and deserializing?`,
    a: `No. Only Binary Serializer and NetDataContractSerializer write assembly
        information on serialization and requires same assembly on deserialization`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. Are you available to serialize
        properties?`,
    a: `<p>Yes. Only Binary Serializer doesn't serialize properties.</p>`,
    t: `serialization`
  },
  {
    q: `When using DataContractSerializer, if class A has a class B, will class B be
        serialized by default or You should make something to apply.`,
    a: `Class B has to have [DataContract] attribute too. As owner`,
    t: `serialization`
  },
  {
    q: `When using DataContractSerializer, if class B derives from class A, will
        class B be serialized by default or you should make something to apply.`,
    a: `<p>Class A has to have [KnownTypes(typeof(B))] attribute.</p>
        <p>Or implement and attach DataContractResolver</p>`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer How to prevent members from serialization?`,
    a: `Don't mark them with [DataMember]`,
    t: `serialization`
  },
  {
    q: `Is reference integrity preserved by default when using DataContractSerializer?`,
    a: `No. Reference integrity is not preserved by default in DataContractSerializer.`,
    t: `serialization`
  },
  {
    q: `Is reference integrity preserved by default when using NetDataContractSerializer?`,
    a: `Yes. Reference integrity is always preserved NetDataContractSerializer.`,
    t: `serialization`
  },
  {
    q: `How to apply reference preservation in DataContractSerializer?`,
    a: `Mark type with [DataContract(IsReference = true)]`,
    t: `serialization`
  },
  {
    q: `How to disable reference integrity preservation in DataContractSerializer?`,
    a: `Do nothing. Reference integrity is not preserved by default in DataContractSerializer.`,
    t: `serialization`
  },
  {
    q: `Can you use serialization hooks [OnSerializing], [OnDeserialized] etc
        with DataContractSerializer`,
    a: `Yes, you can`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. How to change order of elements in XML?`,
    a: `Apply [DataMember(Order = 1)]. If Order is not set then the order is alphabetical`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. Is it possible to change names of XML
        elements?`,
    a: `Yes, it is possible. You can apply: <br>[DataContract(Name = "...")]<br>
        [DataContract(NameSpace="...")]<br>[DataMember(Name = "...")]`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. Will deserialization fail if class has
        a member that is not present in serializing XML?`,
    a: `No, it won't fail. The member will be set to its default value`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. How to make member required to be in XML
        for serialization and deserialization?`,
    a: `Mark the member with [DataMember(IsRequired = true)]`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. How to make member NOT required
        to be in XML?`,
    a: `Don't do anything. All members are not required by default`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serialazer. How to make member required to be in the
        serialized stream?`,
    a: `All members that are NOT marked with [OptionalField] are always required`,
    t: `serialization`
  },
  {
    q: `You're using Binary Serialazer. How to make member NOT required to be in the
        serialized stream?`,
    a: `Mark the member with [OptionalField]`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. How to prevent serializer to serialize
        members with default values? (0 for integers, null for objects)`,
    a: `Apply to member [DataMemeber(EmitDefaultValue = false)]`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. What is the difference when serializing
        object[], List&#60;object&#62; and Collection&#60;object&#62;?`,
    a: `There is no difference. All collections are serialized into equal XML elements`,
    t: `serialization`
  },
  {
    q: `Is XmlSerializer serializes private fields?`,
    a: `No, XmlSerializer cannot serialize private fields.`,
    t: `serialization`
  },
  {
    q: `Is DataContractSerializer serializes private fields?`,
    a: `Yes, they only have to be marked with [DataMember] or type marked with
        [Serializable] instead of [DataContract]`,
    t: `serialization`
  },
  {
    q: `Is DataContractSerializer serializes private fields if type marked with [Serializable]?`,
    a: `Yes, private members serialized by default in this case`,
    t: `serialization`
  },
  {
    q: `Which way XmlSerializer serializes Dictionary?`,
    a: `No. XmlSerializer does not support Dictionaries. But it is possible to
        serialize dictionary like List&#60;KeyValuePair&#60;K, V&#62;&#62;`,
    t: `serialization`
  },
  {
    q: `Which serializers support Dictionaries serialization`,
    a: `DataContractSerializer, Binary Serializer and others. Only XmlSerializer
        does not support Dictionary serialization`,
    t: `serialization`
  },
  {
    q: `What is the difference in XML structure produced by XmlSerializer and by
        DataContractSerializer`,
    a: `No difference. They both produce same XML`,
    t: `serialization`
  },
  {
    q: `Name 7 basic attributes for XmlSerializer`,
    a: `[XmlElement(ElementName, DataType)]<br>[XmlAttribute]<br>
        [XmlArray(ElementName, Namespace)]<br>[XmlArrayItem]<br>
        [XmlRoot(ElementName, Namespace)]<br>[XmlText]<br>[XmlIgnore]<br>others`,
    t: `serialization`
  },
  {
    q: `How to make type serializable by XmlSerializer?`,
    a: `Any type is serializable by default without attributes or interfaces`,
    t: `serialization`
  },
  {
    q: `3 lines of usage of XmlSerializer`,
    a: `var ms = new MemoryStream();<br>var ser = new XmlSerializer(typeof(Acme));
        <br>ser.Serialize(ms, acme);`,
    t: `serialization`
  },
  {
    q: `What are two common usage scenarios for serialization in general?`,
    a: `Persistence and Exchange`,
    t: `serialization`
  },
  {
    q: `What is the filename of C# compiler`,
    a: `csc.exe`,
    t: `assemblies`
  },
  {
    q: `Which tool you use to look at source code of assembly in different languages`,
    a: `reflector.exe`,
    t: `assemblies`
  },
  {
    q: `What is ngen.exe for?`,
    a: `ngen.exe is a native code generator. It generates processor specific
        instruction at the installation phase. <br> e.g. obj.ToString(), obj.GetHashCode
        are already preJITed (native code is already generated)`,
    t: `assemblies`
  },
  {
    q: `What is sos.exe for?`,
    a: `"Son of Strike" - debuggign extension helps to examine JITed code in Visual
        Studio`,
    t: `assemblies`
  },
  {
    q: `How to understand if the assembly has strong name`,
    a: `It has PublicKeyToken not null`,
    t: `assemblies`
  },
  {
    q: `Where the CLR is looking for assembly Acme?`,
    a: `1)GAC (if assembly has strong name)<br>2) App folder<br>3) in
        App/Acme folder<br>4) in subdirectories specified in "probing" section
        of config file. It is looking for dll, then for exe, then go to next location`,
    t: `assemblies`
  },
  {
    q: `How to log assembly resolution fails?`,
    a: `fuslogvw - Fusion Log Viewer - Assembly Binding Log Viewer - Logs all
        assembly resolution fails. Disabled by default.`,
    t: `assemblies`
  },
  {
    q: `Name all four parts of assembly name`,
    a: `1) Friendly name<br>2) Version<br>3) Culture<br>4) PublicKeyToken`,
    t: `assemblies`
  },
  {
    q: `Which command do you use to manage key files for creating strong names`,
    a: `sn.exe -k acme.snk`,
    t: `assemblies`
  },
  {
    q: `Command to build a strongly named assembly`,
    a: `csc.exe /keyfile:acme.snk ...`,
    t: `assemblies`
  },
  {
    q: `How to load assembly with version 1.0.0.1 when 1.0.0.0 was requested`,
    a: `In acme.exe.config section <strong>"configuration" &#62; "runtime" &#62; "assemblyBinding" &#62;
        "dependentAssembly"</strong> &#60;bindingRedirect oldVersion="1.0.0.0" newVersion="1.0.0.1" /&#62;`,
    t: `assemblies`
  },
  {
    q: `How to indicate subfolders where to look for assemblies`,
    a: `in acme.exe.config section <strong>"configuration" &#62; "runtime" &#62; "assemblyBinding"</strong>
        &#60;probing privatePath="libs" /&#62;`,
    t: `assemblies`
  },
  {
    q: `How to indicate assembly folder on the root C:`,
    a: `Use codebase instead of probing in acme.exe.config file. Or deploy your app
        to the root C:`,
    t: `assemblies`
  },
  {
    q: `How to disable publisher policy`,
    a: `In acme.exe.config section <strong>"configuration" &#62; "runtime" &#62; "assemblyBinding" &#62;
        "dependentAssembly"</strong> &#60;publisherPolicy apply="no" /&#62;`,
    t: `assemblies`
  },
  {
    q: `How to load assembly from web`,
    a: `In acme.exe.config section <strong>"configuration" &#62; "runtime" &#62; "assemblyBinding" &#62;
        "dependentAssembly"</strong> &#60;codeBase version="1.0.0.0" href=".../acme.dll" /&#62;`,
    t: `assemblies`
  },
  {
    q: `How to add assembly to GAC?`,
    a: `gacutil -i acme.dll`,
    t: `assemblies`
  },
  {
    q: `How to preJIT assembly?`,
    a: `ngen install acme.dll`,
    t: `assemblies`
  },
  {
    q: `What is the difference between Semaphore and SemaphoreSlim?`,
    a: `Semaphore has a name parameter which allows to create system-level Semaphotre
        that can be used between several processes. SemaphoreSlim works only
        inside of the boundaries of one project.`,
    t: `threading`
  },
  {
    q: `How to synchronize access to shared resource across multiple processes?`,
    a: `Use Mutex class`,
    t: `threading`
  },
  {
    q: `You're using DataContractSerializer. What is the order of the XML elements?`,
    a: `1) Base class elements<br>2) Members that do not have Order parameter in
        alphabetical order<br>3) Members with Order parameter.`,
    t: `serialization`
  },
  {
    q: `You're using DataContractSerializer. What if several elements have Order
        parameter? What their order will be?`,
    a: `They will come in alphabetical order.`,
    t: `serialization`
  },
  {
    q: `You're designing Dispose Pattern. Which method is to centralize all cleanup
        logic?`,
    a: `protected virtual void Dispose(bool disposing)<br>or<br>
        private void Dispose(bool disposing)`,
    t: `other`
  },
  {
    q: `You're designing Dispose Pattern. Which class is a handle to an unmanaged
        resource`,
    a: `SafeHandle`,
    t: `other`
  },
  {
    q: `You're designing Dispose Pattern. What the boolean parameter of Dispose(bool)
        indicates?`,
    a: `If true, method was called from IDisposable.Dispose()<br>If false, method
        was called from Finalizer`,
    t: `other`
  },
  {
    q: `You're designing Dispose Pattern. Three actions in main cleanup logic method?`,
    a: `1) if (disposing)<br>2) if (resource != null)<br>3) resource.Dispose()`,
    t: `other`
  },
  {
    q: `You're designing Dispose Pattern. Two actions in IDisposable.Dispose()`,
    a: `1) Dispose(true)<br>2) GC.SuppressFinalize(this)`,
    t: `other`
  },
  {
    q: ``,
    a: ``,
    t: ''
  },
  {
    q: ``,
    a: ``,
    t: ''
  },
  {
    q: ``,
    a: ``,
    t: ''
  }
]